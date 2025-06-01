import React, { useState, useEffect } from "react";
import { Form, Button, Container, Spinner } from "react-bootstrap";
import axios from "axios";

const TaskCreatePage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "medium",
    status: "pending",
    assignedTo: "",
  });
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch all users and filter for developers
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:4000/api/users", {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        // Only include users with role === "developer"
        setUsers(res.data.filter((u) => u.role === "developer"));
        console.log("Fetched users:", res.data);
      } catch (err) {
        setUsers([]);
      }
    };
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:4000/api/tasks", // use absolute URL for dev, or adjust as needed
        formData,
        {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        }
      );
      alert("Task created successfully!");
      setFormData({
        title: "",
        description: "",
        dueDate: "",
        priority: "medium",
        status: "pending",
        assignedTo: "",
      });
    } catch (err) {
      console.error(err);
      alert("Error creating task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="my-4">
      <h2>Create Task</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title" className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="description" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="dueDate" className="mb-3">
          <Form.Label>Due Date</Form.Label>
          <Form.Control
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="priority" className="mb-3">
          <Form.Label>Priority</Form.Label>
          <Form.Select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="urgent">Urgent</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="status" className="mb-3">
          <Form.Label>Status</Form.Label>
          <Form.Select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="assignedTo" className="mb-3">
          <Form.Label>Assign To (Developer)</Form.Label>
          <Form.Select
            name="assignedTo"
            value={formData.assignedTo}
            onChange={handleChange}
            required
          >
            <option value="">Select Developer</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.fullName} ({user.email})
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? <Spinner size="sm" animation="border" /> : "Create Task"}
        </Button>
      </Form>
    </Container>
  );
};

export default TaskCreatePage;

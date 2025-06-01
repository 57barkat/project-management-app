import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import taskService from "../services/taskService";
import { useDispatch, useSelector } from "react-redux";
import { Container, Card } from "react-bootstrap";
import { fetchComments } from "../features/commentSlice";

const TaskDetailPage = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const { list = [] } = useSelector((state) => state.comments || {});
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTask = async () => {
      const data = await taskService.getTaskById(id);
      setTask(data);
    };
    fetchTask();
    dispatch(fetchComments(id));
  }, [id, dispatch]);

  if (!task) return <p>Loading...</p>;

  return (
    <Container>
      <Card className="my-3">
        <Card.Body>
          <Card.Title>{task.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Status: {task.status}
          </Card.Subtitle>
          <Card.Text>{task.description}</Card.Text>
        </Card.Body>
      </Card>

      <h5>Comments</h5>
      {list.map((comment) => (
        <Card key={comment._id} className="mb-2">
          <Card.Body>
            <Card.Text>{comment.content}</Card.Text>
            <Card.Subtitle className="text-muted small">
              By {comment.author.name}
            </Card.Subtitle>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default TaskDetailPage;

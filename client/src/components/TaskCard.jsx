import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const priorityColor = {
  urgent: "danger",
  high: "warning",
  medium: "info",
  low: "secondary",
};

const TaskCard = ({ task }) => {
  const navigate = useNavigate();

  return (
    <Card
      className={`border-${priorityColor[task.priority]}`}
      onClick={() => navigate(`/tasks/${task._id}`)}
    >
      <Card.Body>
        <Card.Title>{task.title}</Card.Title>
        <Card.Text>
          Due: {new Date(task.dueDate).toLocaleDateString()}
          <br />
          Priority:{" "}
          <span className={`text-${priorityColor[task.priority]}`}>
            {task.priority}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;

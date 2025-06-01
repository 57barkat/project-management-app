import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTasks } from "../features/taskSlice"; // fixed import

import TaskCard from "../components/TaskCard";
import { Container, Row, Col, Spinner } from "react-bootstrap";

const TaskListPage = () => {
  const dispatch = useDispatch();
  const { list = [], loading = false } = useSelector((state) => state.tasks || {});

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Container>
      <h2 className="my-4">Tasks</h2>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <Row xs={1} md={2} lg={3}>
          {list.map((task) => (
            <Col key={task._id} className="mb-3">
              <TaskCard task={task} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default TaskListPage;

import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import "./index.css";
import { AppBar, Container, Section, TaskForm, TaskList } from "./components";

const App = () => {
  return (
    <Container>
      <Section>
        <AppBar />
        <TaskForm />
        <TaskList />
      </Section>
    </Container>
  );
};

export default App;

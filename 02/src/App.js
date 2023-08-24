import React from "react";
import Card from "./Components/Card";
import "./styles.css";

// don't change the Component name "App"
export default function App() {
  return (
    <div>
      <h1>Todos</h1>

      <Card>
        <p>
          Please note: Below are just the most important todos - feel free to
          add more.
        </p>
      </Card>

      <ul>
        <Card className="todo">
          <Card>
            <h2>Learn React</h2>
            <p>Learn React fundamentals & explore core concepts</p>
          </Card>
        </Card>
        <Card className="todo">
          <Card>
            <h2>Practice React</h2>
            <p>Apply your knowledge & build demo projects</p>
          </Card>
        </Card>
      </ul>
    </div>
  );
}

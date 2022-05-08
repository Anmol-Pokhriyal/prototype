import React from "react";
import "./styles.css";
import styled from "styled-components";

function sayHello() {
  alert("YOu clicked me");
}
const Button = styled.button`
  font-family: "Inter", sans-serif;
  background-color: red;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 90px;
  margin: 10px 500px;
  cursor: pointer;
`;

export default function App() {
  return (
    <div>
      <div className="App">
        <h1>
          Build Super Smart <br /> Money Habits
        </h1>
      </div>
      <div>
        <Button onClick={sayHello}>Learn Now </Button>
      </div>
    </div>
  );
}

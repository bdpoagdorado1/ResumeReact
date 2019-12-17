import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import InitialMonogram from "./initial-monogram";
import MainRight from "./main-right";
import MainLeft from "./main-left";

function App() {
  return (
    <div className="App">
      <InitialMonogram />
      <MainLeft />
      <MainRight />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

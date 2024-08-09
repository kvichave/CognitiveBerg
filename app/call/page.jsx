"use client";
import React from "react";
import { test } from "./func";

function call() {
  const [text, setText] = React.useState("");

  const fun = () => {
    console.log("first");
    setText(test("Kunal"));
  };

  return (
    <div>
      <button onClick={() => fun()}> click me</button>
      <h1 className="bg-white">{text}</h1>
    </div>
  );
}

export default call;

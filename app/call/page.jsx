"use client";
import React from "react";
import { getGroqChatCompletion } from "./func";

function call() {
  const [text, setText] = React.useState([]);

  const fun = () => {
    // console.log("first");
    setText(getGroqChatCompletion());
  };

  return (
    <div>
      <button onClick={() => fun()}> click me</button>
      <h1 className="">{text.toString()}</h1>
      {console.log(text)}
    </div>
  );
}

export default call;

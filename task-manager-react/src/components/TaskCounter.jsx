// import { useState } from "react";
// import tasks from "App.jsx";

function TaskCounter() {
  const tasks = ["Call Mom", "Buy the new issue of Scientific American", "Return the textbook to Josie",
    "Buy the new album by Rake", "Buy a gift card for Dad"];

  const taskCounter = tasks.length;

  return <span>{taskCounter}</span>;
}

export default TaskCounter;

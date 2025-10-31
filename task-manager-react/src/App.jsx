// import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";

function App() {
  // const tasks = ["Call Mom", "Buy the new issue of Scientific American", "Return the textbook to Josie",
  //   "Buy the new album by Rake", "Buy a gift card for Dad"];

  const [tasks, setTasks] = useState([]); // Single source of truth
  const [filter, setFilter] = useState("all");

  // task object
  function addTask(text) {
    const newTask = { id: Date.now(), text, complete: false };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== task));
  }

  function updateTask(id, newTask) {
    setTasks(
      tasks.map((task) => (tasks.id === id ? { ...task, task: newTask } : task))
    ); // Map to new array with updates
  }

  // filtering
  const taskList = getFilteredTasks();
  const taskCounter = taskList.length;
  function getFilteredTasks() {
    if (filter === "completed") {
      return taskList.filter((task) => task.completed);
    }
    return tasks;
  }

  return (
    <>
      <Header />
      <main className="site-main">
        <Nav />
        <section className="page">
          <TaskForm onAddTask={addTask} />
          <TaskCounter tasks={tasks} />
          <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
          <TaskList />
          <TaskForm />
        </section>
      </main>
    </>
  );
}

export default App;

// Unused code

//const [count, setCount] = useState([]);

// const [tasks, setTasks] = useState([]); // Single source of truth

// return (
//   // <TaskForm/>
//   <>
//     <TaskList tasks={tasks} />
//     <TaskForm tasks={tasks} setTasks={setTasks} />
//   </>
// );

// function addTask(text) {
//   const newTask = { id: Date.now(), text, complete: false };
//   setTasks([...tasks, newTask]);
// }

// function deleteTask(id) {
//   setTasks(tasks.filter((task) => task.id !== id));
// }

// return (
//   <div className="app">
//     <TaskForm onAddTask={addTask} />
//     <TaskList tasks={tasks} onDeleteTask={deleteTask} />
//   </div>
// );

// return (
//   <div>
//     <a href="task-manager-react/index.html"></a>
//   </div>
// );

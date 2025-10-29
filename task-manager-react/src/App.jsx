// import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import TaskList from "./components/TaskList";

// import TaskItem from "./components/TaskItem";
// import TaskForm from "./components/TaskForm";

function App() {
  // const tasks = ["Call Mom", "Buy the new issue of Scientific American", "Return the textbook to Josie",
  //   "Buy the new album by Rake", "Buy a gift card for Dad"]; 
  
  return (
    <>
      <Header />
      <main className="site-main">
        <Nav />
        <section className="page">
          <TaskList />
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

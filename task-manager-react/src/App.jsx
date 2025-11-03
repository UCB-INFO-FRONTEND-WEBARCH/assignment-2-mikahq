import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";

function App() {
  const [tasks, setTasks] = useState([]); 
  const [filter, setFilter] = useState("all");


  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]); 
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true; // 'all'
  });

  return (
    <>
      <Header tasks={filteredTasks} allTasks={tasks} filter={filter} />
      <main className="site-main">
        <Nav />
        <section className="page">
          <TaskForm onAddTask={addTask} />

          <div className="filter-buttons">
            <button
              className={filter === "all" ? "active" : ""}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={filter === "active" ? "active" : ""}
              onClick={() => setFilter("active")}
            >
              Active
            </button>
            <button
              className={filter === "completed" ? "active" : ""}
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>
          </div>

          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
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

import { useState } from "react";
import "./List.css";
import TaskItem from "./TaskItem";

let tasks = [];

function List() {
  const [taskList, setTaskList] = useState(tasks);

  // Fix: Define handleChange function
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleClick = () => {
    setTaskList([...taskList, "New Task $"]);
  };

  return (
    <section className="page">
      <h1>Inbox</h1>
      <input
        type="text"
        placeholder="Enter your task here"
        onChange={handleChange}
      />
      <button id="add-task-button" onClick={handleClick}>
        + Add Task
      </button>

      <ul className="task-list">
        {taskList.map((task, index) => (
          <li key={index}>
            <label className="container">
              <TaskItem />
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <span className="page-li">{task}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default List;

// import TaskItem from "./TaskItem";

// let tasks = [];

// function List() {
//   const tasks
//   const handleClick = () => {
//     setTasks ([...tasks, 'New Task $' ])
//   }
//   return (
//     onChange = handleChange
//     < button id = "add-task-button" onClick = (handleClick) > + Add Task </button >

//     <ul className="task-list"
//     <section className="page">
//       <h1>Inbox</h1>

//         <input type="text" placeholder="Enter your task here" onChange={handleChange}/>
//       <ul>
//         <li>
//           <label className="container">
//             <TaskItem />
//             <input type="checkbox" />
//             <span className="checkmark"></span>
//           </label>

//           <span className="page-li"></span>
//         </li>

//         <li>
//           <label className="container">
//             Buy the new issue of Scientific American
//             <input type="checkbox" />
//             <span className="checkmark"></span>
//           </label>
//           <span className="page-li"></span>
//         </li>

//         <li>
//           <label className="container">
//             Return the textbook to Josie
//             <input type="checkbox" />
//             <span className="checkmark"></span>
//           </label>
//           <span className="page-li"></span>
//         </li>

//         <li>
//           <label className="container">
//             Buy the new album by Rake <input type="checkbox" />
//             <span className="checkmark"></span>
//           </label>
//           <span className="page-li"></span>
//         </li>

//         <li>
//           <label className="container">
//             Buy a gift card for Dad
//             <input type="checkbox" />
//             <span className="checkmark"></span>
//           </label>
//           <span className="page-li"></span>
//         </li>
//       </ul>
//     </section>
//   );
// }

// export default List;



function TaskCounter({ tasks = [], allTasks = [], filter = "all" }) {

  const displayedCount = tasks.length;
  const totalCount = allTasks.length;
  const completedCount = allTasks.filter(task => task.completed).length;


  let message = "";
  
  if (filter === "all") {
    message = `${totalCount} `;
  } else if (filter === "active") {
    message = `${displayedCount}`;
  } else if (filter === "completed") {
    message = `${displayedCount}`;
  }

  return (
    <div className="task-counter">
      <span>{message}</span>
    </div>
  );
}

export default TaskCounter;

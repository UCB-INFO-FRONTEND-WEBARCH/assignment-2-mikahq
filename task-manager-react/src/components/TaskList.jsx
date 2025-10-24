import TaskItem from "./components/TaskItem";

function TaskList() {
  

  // not passing setTasks to task list
  // displays tasks
  // don't need to modify this component at all

  return (
    <ul>
      {<TaskItem />}
    </ul>
  );
}

export default TaskList
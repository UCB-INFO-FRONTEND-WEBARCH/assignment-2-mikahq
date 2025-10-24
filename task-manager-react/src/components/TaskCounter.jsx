function TaskCounter() {
  const [taskCount, setTaskCount] = useState(0);

  return (
    <ul>
      {setTasks.map((task) => (
        <li> {task}</li>
      ))}
    </ul>
  );
}

export default TaskCounter

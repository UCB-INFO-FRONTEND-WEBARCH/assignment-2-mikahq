import TaskItem from "./components/TaskItem";

function List() {
  return (
    <section className="page">
      <h1>Inbox</h1>
      <ul>
        <li>
                  <label className="container">
                      <TaskItem />
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>

          <span className="page-li"></span>
        </li>

        <li>
          <label className="container">
            Buy the new issue of Scientific American
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <span className="page-li"></span>
        </li>

        <li>
          <label className="container">
            Return the textbook to Josie
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <span className="page-li"></span>
        </li>

        <li>
          <label className="container">
            Buy the new album by Rake <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <span className="page-li"></span>
        </li>

        <li>
          <label className="container">
            Buy a gift card for Dad
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <span className="page-li"></span>
        </li>
      </ul>
    </section>
  );
}

export default List;

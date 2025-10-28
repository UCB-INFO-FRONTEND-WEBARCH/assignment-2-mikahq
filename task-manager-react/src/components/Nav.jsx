import "./Nav.css";
import inboxIcon from "./assets/inbox_icon.png";
import calendarIcon from "./assets/calendar_icon.png";
import upcomingIcon from "./assets/upcoming_icon.png";

function Nav() {
  return (
    <aside className="left-nav">
      <ul>
        <li className="left-nav-hover">
          <img
            src={require("./assets/inbox_icon.png")}
            alt="inbox icon"
            className="src"
          />
          Inbox
          <span className="count"> 5</span>
        </li>
        <li className="left-nav-hover">
          <img
            src={require("./assets/calendar_icon.png")}
            alt="calendar icon"
            className="src"
          />
          Today
          <span className="count"> 5 </span>
        </li>
        <li className="left-nav-hover">
          <img
            src={require("./assets/upcoming_icon.png")}
            alt="upcoming tasks that look like a year in calendar view, icon"
            className="src"
          />
          Upcoming
        </li>
      </ul>
    </aside>
  );
}
export default Nav;

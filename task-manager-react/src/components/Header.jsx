import "./Header.css";
import menuIcon from "../assets/menu_icon.png";
import searchIcon from "../assets/search_icon.png";
import checkIcon from "../assets/check_icon.png";
import TaskCounter from "./TaskCounter";

function Header() {
  return (
    <div className="site-header">
      <div>
        <span className="menu-search">
          <img
            src={menuIcon}
            alt="Menu icon, hamburger style"
            className="src"
          />

          <span className="search">
            <img
              src={searchIcon}
              alt="search icon that looks like a magnifying glass"
              className="src"
            />

            <input type="search" id="search" placeholder="Quick Find" />
          </span>
        </span>
      </div>

      <span className="check-icon">
        <img src={checkIcon} alt="check icon" className="src" />

        <TaskCounter />
      </span>
    </div>
  );
}
export default Header;

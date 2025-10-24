function Header() {
  return (
    <div className="site-header">
      <div>
        <span className="menu-search">
          <img
            src={require("./assets/menu_icon.png")}
            alt="Menu icon, hamburger style"
            className="src"
          />

          <span className="search">
            <img
              src={require("./assets/search_icon.png")}
              alt="search icon that looks like a magnifying glass"
              className="src"
            />

            <input type="search" id="search" placeholder="Quick Find" />
          </span>
        </span>
      </div>

      <span className="check-icon">
        <img
          src={require("./assets/check_icon.png")}
          alt="check icon"
          className="src"
        />

        <span> 30/5</span>
      </span>
    </div>
  );
}
export default Header;

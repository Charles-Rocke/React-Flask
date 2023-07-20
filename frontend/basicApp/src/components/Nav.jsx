// NavBar Component
import "../assets/css/theme.css";
import logo from "../assets/img/gallery/logo.png";

function Nav() {
  return (
    <nav
      className="navbar navbar-light sticky-top"
      data-navbar-darken-on-scroll="900"
    >
      <div className="container pt-2">
        <a className="navbar-brand" href="index.html">
          <img src={logo} alt="..." />
        </a>
        <div className="navbar-nav ms-auto">
          <button className="btn btn-secondary">Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

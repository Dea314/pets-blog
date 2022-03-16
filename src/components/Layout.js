import { Link, NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="fun">Fun</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer>
        <NavLink to="contact">Contact Us</NavLink>
        <br />
        <NavLink to="comment">Make a comment!</NavLink>
      </footer>
    </div>
  );
};

export default Layout;

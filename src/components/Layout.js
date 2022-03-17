import { NavLink, Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
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

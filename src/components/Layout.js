import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
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
  </nav>;
};

export default NavBar;

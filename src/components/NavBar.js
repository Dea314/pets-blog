import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography color="inherit" align="center" variant="button">
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
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;

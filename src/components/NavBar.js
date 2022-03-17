import React from "react";
import { AppBar, Toolbar, Typography, CssBaseline } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navLinks: {
    marginLeft: "10px",
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    textDecoration: "none",
    color: "white",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: "20px",
    "&:hover": {
      borderBottom: "1px solid white",
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <CssBaseline />
        <Toolbar>
          <Typography className={classes.logo} variant="h4">
            <NavLink to="/" className={classes.logo}>
              Pets Blog
            </NavLink>
          </Typography>
          <div className={classes.navLinks}>
            <NavLink to="/" className={classes.link}>
              Home
            </NavLink>
            <NavLink to="fun" className={classes.link}>
              Fun
            </NavLink>
            <NavLink to="about" className={classes.link}>
              About
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;

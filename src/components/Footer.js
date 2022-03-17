import { CssBaseline } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  footer: {
    minHeight: "50px",
    textAlign: "right",
    position: "fixed",
    bottom: 0,
    right: 0,
    width: "100%",
  },
  link: {
    textDecoration: "none",
    color: "#1976d2",
    fontSize: "25px",
    marginRight: "50px",
    "&:hover": {
      color: "grey",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <footer className={classes.footer}>
        <CssBaseline />
        <NavLink to="contact" className={classes.link}>
          Contact Us
        </NavLink>
      </footer>
    </div>
  );
};

export default Footer;

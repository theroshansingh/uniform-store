import React from "react";
import { Toolbar, AppBar, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import logo from "../img/logo/logo.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  logo: {
    width: "65px",
    height: "80px",
  },
  nav: {
    backgroundColor: "white",
    padding: "20px 50px",

    width: "100vw",
  },
  icons: {
    color: "#1D1D1D",
    width: "60px",
    cursor: "pointer",
    transform: "scale(1.2)",
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

function Navbar() {
  const classes = useStyle();
  return (
    <AppBar popsition="Static" className={classes.nav}>
      {/* <img src={logo} alt="logo" className={classes.logo} /> */}
      <Toolbar className={classes.toolbar}>
        <NavLink to="/">
          <Avatar
            variant="square"
            src={logo}
            alt="logo"
            className={classes.logo}
          />
        </NavLink>
        <div>
          <FavoriteIcon className={classes.icons} />
          <NavLink to="/cart">
            <ShoppingCartIcon className={classes.icons} />
          </NavLink>
          <AccountCircleIcon className={classes.icons} />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

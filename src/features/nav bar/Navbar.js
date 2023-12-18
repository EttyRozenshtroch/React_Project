import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";
import { useSelector } from "react-redux";
import CakeIcon from '@mui/icons-material/Cake';
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "black",
      //borderBottom: "1px solid white",
    },
  },
}));

function Navbar({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  // let user = JSON.parse(localStorage.getItem("currUser"));
  let user = useSelector(state=>state.users.currentUser);
  const links = React.Children.toArray(children);

  return (
    <AppBar position="static" style={{ backgroundColor: "#912a25", position: "sticky", top: "0" }}>
      <CssBaseline />
      <Toolbar>
        <Link to="/" className={classes.link}>
          <Typography variant="h4" className={classes.logo}>
            <CakeIcon sx={{ fontSize: 30 }}></CakeIcon> Store
          </Typography>
        </Link>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <><div className={classes.navlinks}>
            {links}
            {/* <Link to="/addProduct" className={classes.link}>
              add product
            </Link>
            <Link to="/products" className={classes.link}>
              Products
            </Link>
            <Link to="/signin" className={classes.link}>
              Sign In
            </Link>
            <Link to="/cart" className={classes.link}>
              Cart
            </Link> */}

          </div><p >  hello  {user?user.firstName:"guest"}</p></>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;

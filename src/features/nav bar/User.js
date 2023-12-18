import React from "react";
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
import { useDispatch, useSelector } from "react-redux";
import CakeIcon from '@mui/icons-material/Cake';
import { logOut } from "../users/userSlice";

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

function User() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    let user = useSelector(state => state.users.currentUser)
    let dispatch=useDispatch();
    return (
        <>
            <Link to="/products" className={classes.link}>
                Products
            </Link>
            <Link to="/cart" className={classes.link}>
                Cart
            </Link>
            <Link to="/signin" className={classes.link} onClick={()=>dispatch(logOut())}>
                log out
            </Link>
        </>
    );
}
export default User;

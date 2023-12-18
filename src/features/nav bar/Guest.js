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
import { useSelector } from "react-redux";
import CakeIcon from '@mui/icons-material/Cake';

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

function Guest() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    let user = useSelector(state => state.users.currentUser)

    return (
        <>
            <Link to="/products" className={classes.link}>
                Products
            </Link>
            <Link to="/signin" className={classes.link}>
                Sign In
            </Link>
        </>
    );
}
export default Guest;

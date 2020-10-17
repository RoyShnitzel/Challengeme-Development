import React, { useContext, useState } from "react";
import Cookies from "js-cookie";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";
import HomeIcon from "@material-ui/icons/Home";
import "./Header.css";
import DarkModeToggle from "react-dark-mode-toggle";
import Search from "./Search/Search";
import { Logged } from "../../context/LoggedInContext";
import { useHistory } from "react-router-dom";
import network from "../../services/network";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import ChooseLabels from "../Choosers/ChooseLabels";

import InfoIcon from "@material-ui/icons/Info";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    darkModeToggle: {
        marginRight: "10px;",
    },
    infoButton: {
        margin: "10px",
    },
    logOutButton: {
        margin: "10px",
    },
    root: {
        display: "flex",
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "white",
        boxShadow: "10px 0px 35px 0px rgba(51,51,51,0.7)",
    },
    drawerPaperDark: {
        width: drawerWidth,
        backgroundColor: "rgb(51,51,51)",
        boxShadow: "2px 0px 35px 0px black",
    },
    generalDrawerHeader: {
        display: "flex",
    },
    drawerHeader: {
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    list: {
        padding: 0,
    },
    avatarUserInfo: {
        margin: "20px",
    },
    logOut: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    heyName: {
        marginTop: "8px",
        marginLeft: "7px",
    },
}));

export default function NarrowNav({ darkMode, setDarkMode }) {
    const classes = useStyles();

    const location = useHistory();
    const value = useContext(Logged);
    const [openNavBar, setOpenNavBar] = useState(false);
    const [labels, setLabels] = useState([]);

    const handleDrawerOpen = () => {
        setOpenNavBar(true);
    };

    const handleDrawerClose = () => {
        setOpenNavBar(false);
    };

    const logOut = async () => {
        try {
            await network.post("/api/v1/auth/logout", {
                token: Cookies.get("refreshToken"),
            });
            Cookies.remove("refreshToken");
            Cookies.remove("accessToken");
            Cookies.remove("name");
            Cookies.remove("userId");
            value.setLogged(false);
            location.push("/login");
        } catch (error) {
            console.error(error);
        }
    };

    const headerStyle = {
        backgroundColor: darkMode ? "rgb(51,51,51)" : "white",
    };
    const letterColor = {
        color: darkMode ? "white" : "black",
    };
    const dividerColor = {
        backgroundColor: darkMode ? "white" : "black",
    };
    return (
        <>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    // [classes.appBarShift]: openNavBar,
                })}
                style={headerStyle}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, openNavBar && classes.hide)}
                    >
                        <MenuIcon style={letterColor} />
                    </IconButton>
                    <Search />
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                anchor="left"
                open={openNavBar}
                classes={
                    darkMode ? { paper: classes.drawerPaperDark } : { paper: classes.drawerPaper }
                }
            >
                <div className={classes.generalDrawerHeader}>
                    <div className={classes.avatarUserInfo}>
                        <Tooltip title={Cookies.get("name")}>
                            <Avatar
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                                style={{
                                    cursor: "pointer",
                                    backgroundColor: darkMode ? "rgb(140,110,99)" : "#7BACB4",
                                }}
                            >
                                {Cookies.get("name").slice(0, 2)}
                            </Avatar>
                        </Tooltip>
                        <div className={classes.heyName} style={letterColor}>
                            <b>Hey {Cookies.get("name")}</b>
                        </div>
                    </div>
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon style={letterColor}/>
                        </IconButton>
                    </div>
                </div>
                <Divider style={dividerColor}/>
                <List className={classes.list}>
                    <Link to="/" className="link-rout">
                        <ListItem button onClick={handleDrawerClose} style={letterColor}>
                            <ListItemIcon>
                                <HomeIcon style={letterColor}/>
                            </ListItemIcon>
                            <ListItemText primary={"Home"} />
                        </ListItem>
                    </Link>
                    <Divider style={dividerColor}/>
                    <Link to="/user_info" className="link-rout">
                        <ListItem button onClick={handleDrawerClose} style={letterColor}>
                            <ListItemIcon>
                                <InfoIcon style={letterColor}/>
                            </ListItemIcon>
                            <ListItemText primary={"Info"} />
                        </ListItem>
                    </Link>
                    <Divider style={dividerColor}/>
                    <ListItem className={classes.logOut} onClick={handleDrawerClose}>
                        <DarkModeToggle
                            className={classes.darkModeToggle}
                            checked={darkMode}
                            onChange={() => {
                                localStorage.setItem("darkMode", !darkMode);
                                setDarkMode((prev) => !prev);
                            }}
                            size={45}
                        />
                    </ListItem>
                    <Divider style={dividerColor} />
                    <ListItem className={classes.logOut} onClick={handleDrawerClose}>
                        <Button
                            className={classes.logOutButton}
                            onClick={logOut}
                            style={{ minWidth: 150 }}
                            variant="contained"
                            color="secondary"
                        >
                            Log Out
                        </Button>
                    </ListItem>
                </List>
                <Divider style={dividerColor}/>
            </Drawer>
        </>
    );
}

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import PostAddIcon from "@material-ui/icons/PostAdd";
import DescriptionIcon from "@material-ui/icons/Description";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import clsx from "clsx";
import { StyledBadge, useStyle } from "./style";
import { Neon, FloatCard } from "../../Components";

import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import GettingStart from "../GettingStart";

const Main = (props) => {
    const classes = useStyle();

    const {
        data,
        open,
        handleDrawerOpen,
        handleDrawerClose,
        theme,
        setCurrentPage,
        currentPage,
    } = props;

    return (
        <>
            <CssBaseline />
            <MyAppBar
                classes={classes}
                open={open}
                handleDrawerOpen={handleDrawerOpen}
            />

            <MyDrawer
                classes={classes}
                open={open}
                handleDrawerClose={handleDrawerClose}
                setCurrentPage={setCurrentPage}
                theme={theme}
            />

            <Route
                path="/neon"
                component={() => (
                    <Neon input="Welcome" fontSize="1rem" color="white" />
                )}
            />
            <Route
                path="/floatcard"
                component={() => (
                    <FloatCard
                        title="welcome"
                        desc="This is a useless text just for show off!"
                    />
                )}
            />
            <Route path="/gettingstart" component={() => <GettingStart />} />
        </>
    );
};

export default Main;

export const MyAppBar = (props) => {
    const { classes, open, handleDrawerOpen } = props;
    return (
        <AppBar
            color="inherit"
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="primary"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: open,
                    })}
                >
                    <MenuIcon />
                </IconButton>
                <h1>Faez Components</h1>
            </Toolbar>
        </AppBar>
    );
};

export const MyDrawer = (props) => {
    const { classes, open, handleDrawerClose, setCurrentPage, theme } = props;

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "rtl" ? (
                        <ChevronRightIcon />
                    ) : (
                        <ChevronLeftIcon />
                    )}
                </IconButton>
            </div>
            <Divider />
            <List>
                <Link to="/gettingstart">
                    <ListItem
                        button
                        onClick={() => setCurrentPage("GettingStart")}
                    >
                        <ListItemIcon>
                            <DescriptionIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={"Getting Start"} />
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                <Link to="/neon">
                    <ListItem button onClick={() => setCurrentPage("Neon")}>
                        <ListItemIcon>
                            <WbIncandescentIcon color="action" />
                        </ListItemIcon>
                        <ListItemText primary={"Neon"} />
                    </ListItem>
                </Link>
                <Link to="/floatcard">
                    <ListItem
                        button
                        onClick={() => setCurrentPage("FloatCard")}
                    >
                        <ListItemIcon>
                            <WallpaperIcon color="action" />
                        </ListItemIcon>
                        <ListItemText primary={"Float Card"} />
                    </ListItem>
                </Link>
            </List>
        </Drawer>
    );
};

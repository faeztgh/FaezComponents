import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EditAttributesIcon from "@material-ui/icons/EditAttributes";
import Divider from "@material-ui/core/Divider";
import DescriptionIcon from "@material-ui/icons/Description";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import clsx from "clsx";

import { useStyle } from "./style";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    const classes = useStyle();

    const {
        open,
        handleDrawerOpen,
        handleDrawerClose,
        theme,
        setCurrentPage,
    } = props;
    return (
        <>
            <MyAppBar
                classes={classes}
                open={open}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
            />
            <MyDrawer
                classes={classes}
                open={open}
                handleDrawerClose={handleDrawerClose}
                setCurrentPage={setCurrentPage}
                theme={theme}
            />
        </>
    );
};

export default Navbar;

export const MyAppBar = (props) => {
    const { classes, open, handleDrawerOpen, handleDrawerClose } = props;
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
                <Link to="/" onClick={handleDrawerClose}>
                    <h1>Faez Components</h1>
                </Link>
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
                    <ListItem button onClick={handleDrawerClose}>
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
                    <ListItem button onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <WbIncandescentIcon color="action" />
                        </ListItemIcon>
                        <ListItemText primary={"Neon"} />
                    </ListItem>
                </Link>
                <Link to="/floatcard">
                    <ListItem button onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <WallpaperIcon color="action" />
                        </ListItemIcon>
                        <ListItemText primary={"Float Card"} />
                    </ListItem>
                </Link>
                <Link to="/darkmode">
                    <ListItem button onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <Brightness4Icon color="action" />
                        </ListItemIcon>
                        <ListItemText primary={"Dark/Light Mode"} />
                    </ListItem>
                </Link>
                <Link to="/buttons">
                    <ListItem button onClick={handleDrawerClose}>
                        <ListItemIcon>
                            <EditAttributesIcon color="action" />
                        </ListItemIcon>
                        <ListItemText primary={"Buttons"} />
                    </ListItem>
                </Link>
            </List>
        </Drawer>
    );
};

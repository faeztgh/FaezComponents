import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { useTheme } from "@material-ui/core/styles";

const NavbarContainer = () => {
    const [loading, setLoading] = useState(false);
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const [currentPage, setCurrentPage] = useState("GettingStart");

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Navbar
                loading={loading}
                open={open}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
                theme={theme}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </>
    );
};

export default NavbarContainer;

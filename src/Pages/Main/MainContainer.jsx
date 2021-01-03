import React, { useState, useEffect } from "react";
import axios from "axios";
import Main from "./Main";
import { useTheme } from "@material-ui/core/styles";

const MainContainer = () => {
    const [data, setData] = useState([]);
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
            <Main
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

export default MainContainer;

import React from "react";
import DoubleBtn from "./DoubleBtn/DoubleBtn";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

const Buttons = () => {
    return (
        <>
            <MyCard content={<DoubleBtn />} header="Double Button" />
        </>
    );
};

export default Buttons;

export const MyCard = (props) => {
    const { content, header } = props;
    return (
        <Card>
            <CardHeader title={header} />
            <CardContent>{content}</CardContent>
        </Card>
    );
};

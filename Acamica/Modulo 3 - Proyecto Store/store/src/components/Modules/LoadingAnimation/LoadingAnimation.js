import React from "react";
import { useStyles } from "./style";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function CircularIndeterminate() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>Loading </h1>
            <CircularProgress />
        </div>
    );
}

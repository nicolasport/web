import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignSelf: 'center',
        justifySelf: 'center',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

export default function CircularIndeterminate() {
    const classes = useStyles();

    return (
        <div className="circularContainer">
            <div className={classes.root}>
                <CircularProgress color="secondary" />
            </div>
        </div>
    );
}
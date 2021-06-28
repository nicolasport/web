import React, { useState } from "react";
import { useStyles } from "./style";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Skeleton from "@material-ui/lab/Skeleton";

export default function Card(props) {
    const classes = useStyles();
    const spaceGrid = 1;
    const { name, imngUrl, cost } = props;
    const [imgLoaded, setImgLoaded] = useState(false);
    const waitImgCacheLoad = () => {
        setImgLoaded(true);
    };

    return (
        <Grid item className={classes.itemBox} xs={spaceGrid}>
            <Paper className={classes.boxPaper}>
                <Typography
                    variant="button"
                    display="block"
                    gutterBottom
                    className={classes.titlePapar}
                >
                    {name}
                </Typography>
                <div className={classes.imgPaper}>
                    {!imgLoaded ? (
                        <>
                            <img
                                style={{ display: "none" }}
                                onLoad={waitImgCacheLoad}
                                className={classes.img}
                                alt={name}
                                src={imngUrl}
                            ></img>
                            <Skeleton
                                animation="wave"
                                variant="rect"
                                width={600}
                                height={200}
                            />
                        </>
                    ) : (
                        <img className={classes.img} alt={name} src={imngUrl}></img>
                    )}
                </div>
                <div className={classes.btnPaper}>
                    <Button
                        onClick={() => props.handlerEvent(props.idProduct, props.name)}
                        variant="contained"
                        color="primary"
                    >
                        Comprar
                    </Button>
                    <Typography style={{ marginLeft: "15px" }}>Precio: {cost}</Typography>
                </div>
            </Paper>
        </Grid>
    );
}

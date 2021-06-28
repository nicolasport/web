import React, { useEffect, useRef } from "react";
import { LayoutMaster } from "../../../components/Layouts/layoutMaster/index";
import Card from "../../Modules/Card";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CircularIndeterminate from "../../Modules/LoadingAnimation/LoadingAnimation";
//import UserService from "../../Constants/UserService"

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        display: "flex",
        margin: "10px",
        alignItems: "center",
        justifyContent: "center",
    },
    coontainerGrid: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
    },
}));

export function HomePage(props) {
    const { productsList } = props;
    const classes = useStyles();
    const getProducts = useRef(props.getProducts);           //Resolve React Hook useEffect has a missing dependency: (react-hooks/exhaustive-deps)
    const putRedeemProduct = useRef(props.putRedeemProduct); //Resolve React Hook useEffect has a missing dependency: (react-hooks/exhaustive-deps)
    let prepareToRender = false;
    let data = productsList
    //let filteredByCategory = products.filter(product => product.category === 'Phones');



    useEffect(() => {
        getProducts.current(props.category)
        //UserService.addCoins(7500)
    }, [props.category]);

    
    const handlerEvent = (id, name) => {
        putRedeemProduct.current(id, name);
    };
    
    data === undefined
        ? (prepareToRender = false)
        : (prepareToRender = true);

    return (
        <>
            {prepareToRender ? (
                //On Fetch Successful
                <LayoutMaster>
                    <Grid className={classes.coontainerGrid} container>
                        {data.map((product) => (
                            <Card
                                key={Math.random()}
                                idProduct={product._id}
                                name={product.name}
                                imngUrl={product.img.url}
                                cost={product.cost}
                                handlerEvent={handlerEvent}
                            />
                        ))}
                    </Grid>
                </LayoutMaster>
            ) : (
                //OnWait Fetch
                <LayoutMaster>
                    <CircularIndeterminate />
                </LayoutMaster>
            )}
        </>
    );
}

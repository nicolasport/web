import { GET_PRODUCTS, REDEEM_PRODUCT } from "./types/index";
import { store as NotifyStore } from "react-notifications-component";
import { getUserInfo } from "./user";

export const addProducts = (productsList) => ({
    type: GET_PRODUCTS,
    productsList,
});

export const getProducts = (category) => async (dispatch) => {
    const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFkOWI2NDliNzc4MTAwMjA5YzVhYTQiLCJpYXQiOjE2MjE5OTAyNDR9.5YW-aBwRpJZS88xYCvlvTv1Ri5x_LphIw7a5NvcC9GA",
    };
    const header = { headers: headers };
    var filteredByCategory = null;

    try {
        let resp = await fetch(
            "https://coding-challenge-api.aerolab.co/products",
            header
        );
        if (resp.status !== 200) {
            throw new Error(resp);
        }

        const data = await resp.json();

        //Filter by category
        if (category) {
            filteredByCategory = data.filter(
                (product) => product.category === category
            );
            console.log("filteredByCategory", filteredByCategory);
        } else {
            filteredByCategory = data;
        }

        dispatch(addProducts(filteredByCategory));
    } catch (e) {
        return false;
    }
};


export const redeemProduct = (successBuy) => ({
    type: REDEEM_PRODUCT,
    successBuy,
});
    export const putRedeemProduct =
        (productId, productName) => async (dispatch) => {
            const header = {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFkOWI2NDliNzc4MTAwMjA5YzVhYTQiLCJpYXQiOjE2MjE5OTAyNDR9.5YW-aBwRpJZS88xYCvlvTv1Ri5x_LphIw7a5NvcC9GA",
            };

            const params = {
                body: JSON.stringify({ productId }),
                method: "post",
                mode: "cors",
                headers: header,
            };

            try {
                const resp = await fetch(
                    `https://coding-challenge-api.aerolab.co/redeem`,
                    params
                );
                if (resp.status !== 200) {
                    throw new Error(resp);
                }
                const data = await resp.json();

                dispatch(redeemProduct(true));
                dispatch(getUserInfo());

                NotifyStore.addNotification({
                    title: "Gracias por tu compra!",
                    message: productName + " : añadido a tu historial de compras ",
                    type: "success",
                    insert: "top",
                    container: "top-left",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 4000,
                        onScreen: true,
                    },
                });

                return data;
            } catch (e) {
                NotifyStore.addNotification({
                    title: "Error al realizar la transaccion",
                    message: "disculpe las molestias ocasionadas",
                    type: "danger",
                    insert: "top",
                    container: "top-left",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 5000,
                        onScreen: true,
                    },
                });
                return false;
            }
        };

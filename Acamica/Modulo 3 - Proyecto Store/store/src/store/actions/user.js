import { GET_USER_INFO, GET_REDEEM_HISTORY } from "./types/index"
import { store as NotifyStore } from "react-notifications-component";

export const addUserInfo = (userData) => ({
    type: GET_USER_INFO,
    userInfo:{
        _id:userData._id, 
        name:userData.name, 
        points:userData.points, 
        createDate:userData.createDate},
});

    export const getUserInfo = () => async (dispatch) => {
            const headers = {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFkOWI2NDliNzc4MTAwMjA5YzVhYTQiLCJpYXQiOjE2MjE5OTAyNDR9.5YW-aBwRpJZS88xYCvlvTv1Ri5x_LphIw7a5NvcC9GA"
                }
            }

        try {
            let resp = await fetch(`https://coding-challenge-api.aerolab.co/user/me`, headers);
            if (resp.status !== 200) {
                throw new Error(resp);
            }
            resp = await resp.json();
            dispatch(addUserInfo(resp))
            return resp;
        } catch (e) {
            return false;
        }
    }


export const addUserReedemHistory = (redeemHistory) => ({
    type: GET_REDEEM_HISTORY,
    redeemHistory,
});

    export const getUserRedeemHistory = () => async (dispatch) => {
            const headers = {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFkOWI2NDliNzc4MTAwMjA5YzVhYTQiLCJpYXQiOjE2MjE5OTAyNDR9.5YW-aBwRpJZS88xYCvlvTv1Ri5x_LphIw7a5NvcC9GA"
                }
            }
            try {
                let resp = await fetch(`https://coding-challenge-api.aerolab.co/user/history`, headers);
                if (resp.status !== 200) {
                    throw new Error("Error");
                }
                const data = await resp.json();
                dispatch(addUserReedemHistory(data.reverse())) //use reverse to show recent items  first
                return data;
            } catch (e) {
                return false;
            }
        }

export const addCoins = (amount) => async (dispatch) =>  {
    const header = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFkOWI2NDliNzc4MTAwMjA5YzVhYTQiLCJpYXQiOjE2MjE5OTAyNDR9.5YW-aBwRpJZS88xYCvlvTv1Ri5x_LphIw7a5NvcC9GA",
    };
    const params = {
        body: JSON.stringify({ amount }),
        method: "post",
        mode: "cors",
        headers: header
    }
    try {
        const resp = await fetch(`https://coding-challenge-api.aerolab.co/user/points`, params);
        if (resp.status !== 200) {
            throw new Error(resp);
        }
        const data = await resp.json();
        dispatch(getUserInfo())
        NotifyStore.addNotification({
            title: "Creditos de usuario",
            message: "Se han añadido: "+amount+" creditos a tu usuario",
            type: "success",
            insert: "top",
            container: "top-left",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true,
            },
        });
        return data;
    } catch (e) {
        return false;
    }
}

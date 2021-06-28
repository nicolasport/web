import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    titlePapar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontSize: "16px",
    },
    imgPaper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        display: "block",
        maxHeight: "250px",
        maxWidth: "250px",
        width: "auto",
        height: "auto",
    },
    btnPaper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
    },
    boxPaper: {
        minWidth: "300px",
    },
    itemBox: {
        minWidth: "300px",
        margin: "10px",
    },
}));

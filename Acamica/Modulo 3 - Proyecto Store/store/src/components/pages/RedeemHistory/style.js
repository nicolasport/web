import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '5px 20px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    connectorTime: {
        height: '75px',
    }
}));
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: 10,
        minWidth: 320,  
    },
    media: {
        height: 200,
    },
});

export default function MediaCard (props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.urlToImage}/>
                <CardContent>
                    <Typography noWrap={true} gutterBottom variant="h5" component="h2"> 
                        {props.title} </Typography>
                    <Typography noWrap={true} variant="body2" color="textSecondary" component="p">
                        {props.description} </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button href={props.url} target="_blank" size="small" color="primary">
                    Abrir Noticia </Button>
            </CardActions>
        </Card>
    );
}
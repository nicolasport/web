import React, {useEffect, useRef} from 'react';
import { LayoutMaster } from "../../Layouts/layoutMaster/index"
import CircularIndeterminate from "../../Modules/LoadingAnimation/LoadingAnimation"
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './style';



export function RedeemHistory(props) {
    const { userReedeemHistyory } = props
    const getUserRedeemHistory = useRef(props.getUserRedeemHistory) //Resolve React Hook useEffect has a missing dependency: (react-hooks/exhaustive-deps)


    useEffect(() => {
        getUserRedeemHistory.current()
    }, [])


    let prepareToRender = false
    userReedeemHistyory === undefined ? (prepareToRender = false) : (prepareToRender = true)
    
    const classes = useStyles();
    return (
        <>
            {prepareToRender
                ? //On Fetch Successful
                    <LayoutMaster>
                    
                        <Timeline align="alternate">

                            {userReedeemHistyory.map(product => (
                                <TimelineItem key={Math.random()}>
                                    <TimelineOppositeContent>
                                        <Typography variant="body2" color="textSecondary">
                                            {product.createDate.substring(0,10)}
                                        </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        
                                        <img alt={product.name} style={{ height: '80px', borderRadius: '50%', border: 'solid 2px grey'}}src={product.img.url} />

                                        <TimelineConnector className={classes.connectorTime} />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Paper elevation={3} className={classes.paper}>
                                            <Typography variant="h6" component="h1">
                                                {product.name}
                                            </Typography>
                                            <Typography>Costo: {product.cost}</Typography>
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}

                        </Timeline>

                    </LayoutMaster>

                    
                : //OnWait Fetch
                    <LayoutMaster>
                            <CircularIndeterminate />
                    </LayoutMaster>
            }
        </>
    );
}

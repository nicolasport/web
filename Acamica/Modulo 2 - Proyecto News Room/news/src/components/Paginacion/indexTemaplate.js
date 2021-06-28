import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';

export function Paginacion(props) {
    const { handlePage, cantTotalPaginas } = props

    //materialUI
    const useStyles = makeStyles((theme) =>
        createStyles({
            pagination: {
                gridColumn: '1/4',
                display: 'flex',
                justifyContent: 'center',
                padding: '23px',
            }
        }),
    );

    const classes = useStyles(); //materialUI

    return (
        <div className={classes.pagination}>
            <Pagination onChange={props.handlePage} count={cantTotalPaginas} color="primary" />
        </div>
    )
}


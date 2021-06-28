
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

export function SearchBar(props) {
    const styleSearchBar = {
        display: 'grid',
        gridColumn: '1 / 4',
        gridTemplateColumns: 'repeat(2, 1fr)',
    }
    const { handleSearchI } = props

    return (
        <div style={styleSearchBar}>
            <TextField id="filled-basic"  onChange={props.handleSearchI} variant="filled" label="Busqueda" />
            <Link to={"/search"}>
                <Button style={{ gridColumn: '2/2', width: '10%', height: '100%' }} variant="contained" color="primary">
                    <SearchIcon />
                </Button>
            </Link>
        </div>
    )
}
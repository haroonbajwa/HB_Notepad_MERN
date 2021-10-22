import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, InputBase } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import { getNotesBySearch } from '../../actions/notes';

import useStyles from './styles';

const Header = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const [search, setSearch] = useState('');


    const searchNote = () => {
        if(search.trim()) {
            dispatch(getNotesBySearch({ search }));
            history.push(`/notes/search?searchQuery=${search ||'none'}`);
        } else {
            history.push('/');
        }
    }

    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.title} variant="h6" noWrap>
                    HB Notes
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                    <InputBase
                    placeholder="Search…"
                    classes={{ root: classes.inputRoot, input: classes.inputInput }}
                    inputProps={{ 'aria-label': 'search' }}
                    name="search"
                    onKeyPress={(e) => { if(e.key === 'Enter') searchNote() }}
                    value={search}
                    onChange = {(e) => setSearch(e.target.value)}
                    />
                </div>
            </Toolbar>
        </AppBar>
    </div>
    )
}

export default Header

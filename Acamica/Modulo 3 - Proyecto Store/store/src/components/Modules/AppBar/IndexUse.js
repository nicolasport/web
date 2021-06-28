
//Logic component 
import React, { useEffect, useRef } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";

import { useTheme } from "@material-ui/core/styles";
import { MenuItem, Menu, Typography, IconButton } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    linkRouter:{
        textDecoration: 'none',
        color: 'black',
    },
    sekeleton: {
        width: '100%',
        position: 'fixed !important',
        top: '0',
        height: '71px !important',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 10,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "50%",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "11px",
        marginRigth: "10px",
    },
    inputRoot: {
        color: "inherit",
        marginLeft: "11px",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        marginLeft: "10px",
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "40ch",
            marginLeft: "10px",
        },
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    rootDrawer: {
        display: "flex",
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
    },
}));

export const usePrimarySearchAppBar = (props) => {
    const theme = useTheme();                                                 //MaterialUI
    const classes = useStyles();                                              //MaterialUI
    const [open, setOpen] = React.useState(false);                            //MaterialUI
    const [anchorEl, setAnchorEl] = React.useState(null);                     //MaterialUI
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null); //MaterialUI
    const isMenuOpen = Boolean(anchorEl);                                     //MaterialUI
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);                     //MaterialUI
    const mobileMenuId = "primary-search-account-menu-mobile";                //MaterialUI
    let prepareToRender = false;                                             
    const { userInfo } = props;                                              
    const getUserInfo = useRef(props.getUserInfo);                            //Resolve React Hook useEffect has a missing dependency: (react-hooks/exhaustive-deps)

    useEffect(() => {
        getUserInfo.current();
    }, []);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = (amount) => {
        if (amount !== undefined) {props.addCoins(amount)}
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleMenuDrawerOpen = () => {
        setOpen(true);
    };

    const handleMenuDrawerClose = () => {
        setOpen(false);
    };

    const menuId = "primary-search-account-menu";
    const LinkResetStyle = {
        textDecoration: "none",
        color: "black",
    };
    userInfo === undefined
        ? (prepareToRender = false)
        : userInfo.length === 0
            ? (prepareToRender = false)
            : (prepareToRender = true);

    //MENU HAMBURGUESA
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "center" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={() => handleMenuClose(1000)}>
                <AddCircleOutlineIcon />
                <Typography variant="overline" noWrap>
                    Añadir 1000 Creditos
                </Typography>
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose(5000)}>
                <AddCircleOutlineIcon />
                <Typography variant="overline" noWrap>
                    Añadir 5000 Creditos
                </Typography>
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose(7500)}>
                <AddCircleOutlineIcon />
                <Typography variant="overline" noWrap>
                    Añadir 7500 Creditos
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="overline" noWrap>
                    {userInfo !== undefined ? (
                        <div>Usuario Creado: {userInfo.createDate.substring(0, 10)}</div>
                    ) : (
                        <div>Usuario Creado:</div>
                    )}
                </Typography>
            </MenuItem>
        </Menu>
    );

    //MENU MOBILE
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            id={mobileMenuId}
            keepMounted
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Typography variant="overline" noWrap>
                    {userInfo !== undefined ? userInfo.name : ""}
                </Typography>
            </MenuItem>
            <MenuItem>
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    color="inherit"
                >
                    <MonetizationOnIcon fontSize={"default"} />
                    <Typography variant="overline" noWrap>
                        Puntos de Usario:
                        {prepareToRender ? userInfo.points : ""}
                    </Typography>
                </IconButton>
            </MenuItem>
        </Menu>
    );



    return {
        renderMobileMenu,      //MaterialUI
        mobileMenuId,          //MaterialUI
        renderMenu,            //MaterialUI
        menuId,                //MaterialUI
        handleMenuDrawerClose, //MaterialUI
        handleMenuDrawerOpen,  //MaterialUI
        handleMobileMenuOpen,  //MaterialUI
        handleMenuClose,       //MaterialUI
        handleProfileMenuOpen, //MaterialUI
        handleMobileMenuClose, //MaterialUI
        classes,               //MaterialUI
        theme,                 //MaterialUI
        isMobileMenuOpen,      //MaterialUI
        isMenuOpen,            //MaterialUI
        open,                  //MaterialUI
        userInfo,
        getUserInfo,
        prepareToRender,
        LinkResetStyle
    };
};

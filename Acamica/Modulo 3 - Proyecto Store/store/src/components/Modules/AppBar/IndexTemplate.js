import React from "react";
import { usePrimarySearchAppBar } from "./IndexUse";
import { SidebarData } from "./constants/ListDrawerItems";
import { Link } from "react-router-dom";
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    AppBar,
    Toolbar,
    Drawer,
    List,
    Typography,
    Divider,
    IconButton,
    Tooltip} from "@material-ui/core";


import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Skeleton from '@material-ui/lab/Skeleton';

export function PrimarySearchAppBar(props) {
    const { 
        renderMobileMenu,
        mobileMenuId,
        renderMenu,
        menuId,
        handleMenuDrawerClose,
        handleMenuDrawerOpen,
        handleMobileMenuOpen,
        handleProfileMenuOpen,
        classes,
        theme,
        open,
        userInfo,
        prepareToRender} = usePrimarySearchAppBar(props);

    
    return (
        <>
            {prepareToRender ? (
                //On Fetch OK
                <>
                    {/*TOP BAR MENU*/}
                    <AppBar position="fixed">
                        <Toolbar>
                            {/*SANDWICH MENU*/}
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleMenuDrawerOpen}
                            >
                                <MenuIcon />
                            </IconButton>
                            {/*TITLE OF MENU*/}
                            <Typography className={classes.title} variant="h6" noWrap>
                                Store
                            </Typography>
                            <div className={classes.grow} />
                            <div className={classes.sectionDesktop}>
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <MonetizationOnIcon fontSize={"default"} />
                                    <Typography variant="overline" noWrap>
                                        {userInfo.points}
                                    </Typography>
                                </IconButton>
                                <Tooltip title="Press to add points" aria-label="add">
                                    <IconButton
                                        edge="end"
                                        aria-label="account of current user"
                                        aria-controls={menuId}
                                        aria-haspopup="true"
                                        onClick={handleProfileMenuOpen}
                                        color="inherit"
                                    >
                                        <AccountCircle fontSize={"large"} />
                                        <Typography variant="overline" noWrap>
                                            {userInfo.name}
                                        </Typography>
                                    </IconButton>
                                </Tooltip>
                            </div>
                            <div className={classes.sectionMobile}>
                                <IconButton
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </div>
                        </Toolbar>
                    </AppBar>

                    {/*DRAWER LEFT MENU*/}
                    <Drawer
                        className={classes.drawer}
                        variant="persistent"
                        anchor="left"
                        open={open}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.drawerHeader}>
                            <IconButton onClick={handleMenuDrawerClose}>
                                {theme.direction === "ltr" ? (
                                    <ChevronLeftIcon />
                                ) : (
                                    <ChevronRightIcon />
                                )}
                                Menu
                            </IconButton>
                        </div>
                        <Divider />
                        <List>

                            {SidebarData.map((items) => (
                                <Link key={items.link} to={items.link} className={classes.linkRouter}>
                                    <ListItem
                                        button
                                        key={items.title}
                                        style={{ textDecoration: 'none', color: '#616161'}}
                                    >
                                            <ListItemIcon>{items.icon}</ListItemIcon>
                                        <ListItemText primary={items.title} style={{ textDecoration: 'none'}} />
                                        
                                    </ListItem>
                                </Link>
                            ))}

                        </List>
                    </Drawer>
                    {renderMobileMenu} {/*Menu de Nombre de usuario WEB*/}
                    {renderMenu} {/*Menu de Nombre de usuario MOBILE with MEDIA@*/}
                </>
            ) : (
                //On wait fetch
                    <Skeleton animation="wave" variant="rect" className={classes.sekeleton} />
            )}
        </>
    );
}

import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import log from "../../images/logo2.png";
import MenuList from "@material-ui/core/MenuList";
import {NavLink} from "react-router-dom";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    headers:{
        width:'100vw',
        height:'80vh',
        top:'0px'
    }
}));

export default function SimpleMenu() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <div className={classes.root}>
                <AppBar color={"white"} position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            test
                        </Typography>
                        <IconButton  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                                    className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
            <Menu
                open={Boolean(anchorEl)}
                onClose={handleClose}
                border={0}
            >
                <MenuList  className={classes.headers}>
                        <img src={log} alt={'img'} />
                         <MenuItem  onClick={handleClose}>
                             <NavLink className={'li'} to='/'>
                                <li  >About me</li>
                            </NavLink>
                         </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <NavLink  className={'li'} to ='/relationships'>
                                <li>Relationships</li>
                            </NavLink>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <NavLink  className={'li'} to='/requirements'>
                                <li>Requirements</li>
                            </NavLink>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <NavLink  className={'li'} to ='/users'>
                                <li >Users</li>
                            </NavLink>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <NavLink  className={'li'} to ='signUp'>
                                <li>Sign up</li>
                            </NavLink>
                        </MenuItem>
                </MenuList>

            </Menu>
        </div>
    );
}
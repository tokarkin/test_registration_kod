import React from "react";
import './navBar.scss';
import {NavLink} from "react-router-dom";


const NavBar = ()=> {
    return(
        <ul className={'container'} >
            <NavLink className={'li'} to='/'>
            <li  >About me</li>
        </NavLink>
            <NavLink  className={'li'} to ='/relationships'>
                <li>Relationships</li>
            </NavLink>
            <NavLink  className={'li'} to='/requirements'>
                <li>Requirements</li>
            </NavLink>
            <NavLink  className={'li'} to ='/users'>
                <li >Users</li>
            </NavLink>
            <NavLink  className={'li'} to ='signUp'>
                <li>Sign up</li>
            </NavLink>
        </ul>
    )
};
export default NavBar;
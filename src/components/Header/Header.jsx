import React from "react";
import Grid from "@material-ui/core/Grid";
import NavBar from "../NavBar/NavBar";
import log from '../../images/logo2.png'
import  './Header.scss';

const Header = () => {
    return(
        <div >
            <Grid container spacing={3} >
                <Grid className={'container'} item xs={6} xl={6}>
                    <img src={log} alt={'img'} />
                </Grid>
                <Grid item xs={6} xl={6}>
                    <NavBar />
                </Grid>
            </Grid>
        </div>
    )
};
export default Header;
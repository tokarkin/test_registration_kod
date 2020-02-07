import React from "react";
import './style.scss'
import {NavLink} from "react-router-dom";
import UsersContainer from "../Users/UsersContainer";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles'
import RegistrationFormContainer from "../RegistrationForm/RegistrationFormContainer";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
const AboutUs = () => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                        <div className={'containerAbout'} >
                            <div className={'containerAbout__wrap'}>
                                <h2 className={'heading'}>TEST ASSIGMENT FOR FRONTEND DEVELOPER POSITION</h2>
                                <p className={'text'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem fugit hic rem repellendus vero.
                                    Assumenda dicta eveniet, minus obcaecati odio officia veritatis.
                                    Autem error eum ex, exercitationem nihil officiis sit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias temporibus, voluptate.
                                </p>
                                <NavLink to='/signUp'>
                                    <button className={'headBtn'} >
                                        Sign up now
                                    </button>
                                </NavLink>
                            </div>
                        </div>
            </Grid>
            <Grid item xs={12}>
                        <div className={'secondBlock'}>
                            <div className={'acquinted'}>
                                <h2 className={'acquinted__header'}>
                                    Let`s get acquainted
                                </h2>
                                <div className={'acquinted__block'}>
                                    <div className={'acquinted__block__img'}>

                                    </div>
                                    <div className={'neugadal'}>
                                        <div className={'acquinted__block__wrapper'}>
                                            <h4 className={'acquinted__block__wrapper__head'}>
                                                I am cool programmer
                                            </h4>
                                            <p className={'acquinted__block__wrapper__first'}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias, consectetur illum itaque molestias numquam similique? Asperiores, quae, temporibus? Doloremque eaque illo inventore officiis quam quasi temporibus vel voluptatem voluptatibus.
                                            </p>
                                            <p className={'acquinted__block__wrapper__first'}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias aliquam aspernatur at debitis delectus distinctio facere minus mollitia necessitatibus officiis omnis placeat rem repellat sed similique sit tempore ut!
                                            </p>
                                            <NavLink to={'/singUp'}>
                                                <button className={'acquinted__block__wrapper__btn'}>
                                                    Sing up now
                                                </button>
                                            </NavLink>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    <div style={{textAlign:'center'}}>
                        <h2>
                            Our cheerful users
                        </h2>
                        <p>
                            Attention! Sorting!
                        </p>
                            <UsersContainer />
                    </div>
            </Grid>
            <Grid  item xs={12}>
                <div style={{textAlign:'center',marginTop:'20px'}}>
                    <h2 >
                        Register to ger a work
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, at corporis distinctio esse harum id, illo ipsa iusto, laborum libero modi molestiae natus non odio quam quos ratione similique temporibus.
                    </p>
                </div>

                <div >
                    <RegistrationFormContainer/>
                </div>
            </Grid>
        </Grid>

        </div>
    )
};
export default AboutUs;
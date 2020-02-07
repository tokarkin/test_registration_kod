import React, {Fragment} from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import UsersContainer from "../Users/UsersContainer";
import RegistrationFormContainer from "../RegistrationForm/RegistrationFormContainer";
import Media from 'react-media';
import SmallHeaders from "../Header/SmallHeaders";


const Routes = ()=>{
    return(
        <div >
            <div>
                <Media queries={{
                    small: "(max-width: 599px)",
                    medium: "(min-width: 600px) and (max-width: 968px)",
                    large: "(min-width: 969px)"
                }}>
                    {matches => (
                        <Fragment>
                            {matches.small &&   <div>
                                <Grid container spacing={1}  >
                                    <Grid item xs={12} xl={12}>
                                        <SmallHeaders />
                                    </Grid>
                                    <Grid item xs={12} xl={12}>
                                        <Route exact path='/' render={ () =><AboutUs/>} />
                                        <Route path='/users' render={ () =><UsersContainer/>} />
                                        <Route path='/signUp' render={ () => <RegistrationFormContainer/>}/>
                                    </Grid>
                                </Grid>
                            </div> }
                            {matches.medium &&   <div>
                                <Grid container spacing={3} >
                                    <Grid item xs={12} xl={12}>
                                        <SmallHeaders />
                                    </Grid>
                                    <Grid item xs={12} xl={12}>
                                        <Route exact path='/' render={ () =><AboutUs/>} />
                                        <Route path='/users' render={ () =><UsersContainer/>} />
                                        <Route path='/signUp' render={ () => <RegistrationFormContainer/>}/>
                                    </Grid>
                                </Grid>
                            </div> }
                            {matches.large &&    <div>
                                <Grid container spacing={3} >
                                    <Grid item xs={12} xl={12}>
                                        <Header />
                                    </Grid>
                                    <Grid item xs={12} xl={12}>
                                        <Route exact
                                         path='/' render={ () =><AboutUs/>} />
                                        <Route path='/users' render={ () =><UsersContainer/>} />
                                        <Route path='/signUp' render={ () => <RegistrationFormContainer/>}/>
                                    </Grid>
                                </Grid>
                            </div>}
                        </Fragment>
                    )}
                </Media>
            </div>

        </div>


    )
};
export default Routes;
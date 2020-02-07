import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Routes from "./components/Routes/Routes";
import {connect} from "react-redux";



const App = ()=> {
  return (

          <BrowserRouter >

                  <Routes />
          </BrowserRouter>

  );
};

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, null)(App);

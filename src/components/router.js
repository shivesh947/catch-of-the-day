import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import  Storepicker from './storepicker'
import App from './App';
import Notfound from './notfound';
let Router=(props)=> (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Storepicker} />
        <Route exact path="/store/:storeId" component={App} />
        <Route component={Notfound} />

    </Switch> 
    </BrowserRouter>
)

export default Router;

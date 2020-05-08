import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Login from './components/Login';
import HomePage from './components/HomePage';
import ResultModal from './components/ResultModal';

const Routes = () => (<Switch>
    <Redirect exact from="/" to="/student-login" />
    <Route path="/student-login" component={Login}/>
    <Route path="/view-details" component={HomePage}/>
    <Route path="/result" component={ResultModal}/>

</Switch>);

export default Routes;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage  from './../views/homepage';

const Routes = () => (
    <Switch>
        <Route
        path='/'
        exact
        component= { Homepage }
        />
    </Switch>
);

export default Routes;

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import ClassRoom from './pages/ClassRoom';

function Routes() {
    return (
        <Switch>
            <Route path='/' exact>
                <Redirect to='/register' />
            </Route>
            <Route path='/register' component={Register} exact />
            <Route path='/login' component={Login} exact />
            <Route path='/classroom' component={ClassRoom} exact />
        </Switch>
    )
}


export default Routes;
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '../components/Main';
import Admin from './Admin';
import AdminLogin from '../components/AdminLogin';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={ Main }/>

                <Route exact path='/admin' component={ Admin }/>

                <Route path='/admin/login' component={ AdminLogin }/>
            </Switch>
        );
    }
}

export default App;

import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import Main from '../components/Main';
import Admin from './Admin';
import AdminLogin from '../components/AdminLogin';

const AdminRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route
        {...rest}
        render={ (props) => isAuthenticated ? <Component {...props}/> : <Redirect to='/admin/login' /> }
    />
);

class App extends Component {
    constructor(props) {
        super(props);

        this.renderAdmin = this.renderAdmin.bind(this);
    }

    componentDidMount() {
        this.props.checkAuth();
    }

    renderAdmin() {
        if (this.props.auth) {
            return(
                <Redirect to='/admin' />
            );
        } else {
            return(
                <Redirect to='/admin/login' />
            );
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={ Main }/>

                    <Route path='/admin/login' component={ AdminLogin }/>

                    <AdminRoute isAuthenticated={ this.props.auth } path='/admin' component={ Admin } />
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.admin
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkAuth: () => {
            dispatch(actions.checkAuth());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

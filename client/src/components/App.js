import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Main from './Main';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div><Route exact path='/' component={Main}/></div>
            </BrowserRouter>
        );
    }
}

export default App;

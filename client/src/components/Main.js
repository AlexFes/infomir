import React, { Component } from 'react';

import Header from './Header';
import Body from '../containers/Body';
import Footer from './Footer';

class Main extends Component {
    render() {
        return (
            <div className="container-fluid px-0">
                <div id="greenline" />

                <Header />

                <Body />

                <Footer />
            </div>
        );
    }

}

export default Main;
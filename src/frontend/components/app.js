'use strict';

import React, {Component} from 'react';
import Header from './header';

export default class App extends Component {
    render() {
        return (<div>
        <Header/ >
        {this.props.children}
        </div>);
    }
}

App.propTypes = { children: React.PropTypes.element };

if (module.hot) {
    module.hot.accept();
}

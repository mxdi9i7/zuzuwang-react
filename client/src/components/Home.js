import React, {Component} from 'react';
import {Link} from 'react-router';
import Nav from './Nav';

class Home extends Component {

    render() {
        

        return (
            <div>
                <Nav />
                <h1>This is Home</h1>
            </div>
        )
    }
}
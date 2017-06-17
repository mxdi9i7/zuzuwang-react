import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Nav from '../Nav';

class Signin extends Component {

    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        

        return (
            <div>
                <Nav />
                <div className="signin-container">
                    <form action="">
                        <input type="text" placeholder="email"/>
                        <input type="password" placeholder="password"/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signin
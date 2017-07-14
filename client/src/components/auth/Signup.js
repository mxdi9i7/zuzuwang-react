import React, {Component} from 'react';
import Nav from '../Nav'
import axios from 'axios'
import SignupForm from './forms/SignupForm'

class SignupPage extends Component {
    render() {
        return (
            <div>
                 <Nav />
                <h1>Sign up page</h1>
                <div className="row">
                    <div className="col s12 m8 offset-m2 l6 offset-l3">
                        <SignupForm />
                    </div>
                </div>
            </div>
        )
    }
}
export default SignupPage
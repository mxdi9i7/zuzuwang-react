import React, {Component} from 'react';
import Nav from '../Nav'
import SigninForm from './forms/SigninForm'
class SigninPage extends Component {
    render() {
        const { userSigninRequest } = this.props
        return (
            <div>
                 <Nav />
                <h1>Sign in page</h1>
                <div className="row">
                    <div className="col s12 m8 offset-m2 l6 offset-l3">
                         <SigninForm userSigninRequest={userSigninRequest} />
                    </div>
                </div>
            </div>
        )
    }
}
SigninForm.propTypes = {
    userSigninRequest: React.Proptypes.func.isRequired
}

export default SigninPage
import React, {Component} from 'react';
import axios from 'axios'

class SigninForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e) {
        e.preventDefault()
        console.log(this.state)
        this.props.userSigninRequest(this.state)
    }

    render() {
        return (
                         <form onSubmit={this.onSubmit}>
                            <h1>登录</h1>
                            <label>Email</label>
                            <input
                            value={this.state.email}
                            onChange={this.onChange}
                            type="text"
                            name="email"
                            />

                            <label>Password</label>
                            <input
                            value={this.state.password}
                            onChange={this.onChange}
                            type="text"
                            name="password"
                            />

                            <button className="btn btn-large blue waves-effect waves-light">Sign in</button>
                        </form>
        )
    }
// }
// SigninForm.propTypes = {
//     userSigninRequest: React.Proptypes.func.isRequired
// }
export default SigninForm
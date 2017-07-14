import React, {Component} from 'react';
import axios from 'axios'

class SignupForm extends Component {
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
        console.log(123)
        console.log(this.state)
        axios.post('http://localhost:3001/auth/signup', this.state)
        .then((data)=> {
            console.log(data.data.token)
        })
        // this.props.userSignupRequest(this.state)
    }

    render() {
        return (
                         <form onSubmit={this.onSubmit}>
                            <h1>注册</h1>
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
}
export default SignupForm
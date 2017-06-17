import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form'
import Nav from '../Nav';

const renderInput = field => 
    <div>
        <input {...field.input} type={field.type} />
    </div>

class Signin extends Component {
    
     handleFormSubmit({email, password}) {
            console.log(email, password)
        }

    render() {
       
        const { handleSubmit } = this.props
        
        return (
            <div>
                <Nav />
                <div className="signin-container">
                    <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                            <label>Email:</label>
                            <Field name="email" component={renderInput} type="email"/>
                            <label>Password:</label>
                            <Field name="password" component={renderInput} type="password"/>
                            <button action="submit">Sign in</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'signin'
})(Signin);



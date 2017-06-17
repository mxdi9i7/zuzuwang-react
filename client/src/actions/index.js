import axios from 'axios';

const API_URL = 'http://localhost:3000/api'

export function signinUser({
    email,
    password,
}) {
    
    return function(dispatch) {
        //submit email and pass to the server
        axios.post(`${API_URL}/signin`, {email, password})
    }
    //if req is true
    // update state to indicate user is authenticated
    // save the jwt token
    // redirect to the user route

    //if the req is flase
    // show an error to the user
}
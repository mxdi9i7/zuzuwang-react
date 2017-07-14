import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import reduxThunk from 'redux-thunk'
import FreeListings from './components/FreeListings'
import ProListings from './components/ProListings'
// import UserProfile from './components/UserProfile'
import Home from './components/Home'
import SigninPage from './components/auth/Signin'
import SignupPage from './components/auth/Signup'
const App = () => {
    return (
                <Router history={createHistory}>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/free" component={FreeListings} />
                        {/*<Route path="/users" component={UserProfile} />*/}
                        <Route path="/pro" component={ProListings} />
                        <Route path="/signin" component={SigninPage} />
                        <Route path="/signup" component={SignupPage} />
                    </div>
                </Router>
   )   
}
export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import FreeListings from './components/FreeListings'
import ProListings from './components/ProListings'
// import { Router, Route } from 'react-router'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Home from './components/Home'
import Nav from './components/Nav'

const Root = () => {
    return (
                <Router history={createHistory}>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/free" component={FreeListings} />
                        <Route path="/pro" component={ProListings} />
                    </div>
                </Router>
   )   
}
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import FreeListings from './components/FreeListings'
import ProListings from './components/ProListings'
import { Router, Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import Home from './components/Home'

const Root = () => {
    return (
        <div>
                <Router history={createHistory}>
                    <Route path="/" component={Home} />
                    <Route path="/free" component={FreeListings} />
                    <Route path="/pro" component={ProListings} />
                </Router>
        </div>
   )   
}
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

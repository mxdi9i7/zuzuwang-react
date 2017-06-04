import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.css';

class Nav extends Component {

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                <Link to="#!" className="brand-logo">Logo</Link>
                <Link to="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></Link>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/free">免费信息</Link></li>
                    <li><Link to="/pro">付费信息</Link></li>
                    <li><button className="btn">登录</button></li>
                    <li><button className="btn">注销</button></li>
                </ul>
                <ul className="side-nav" id="mobile-demo">
                    <li><Link to="/free">免费信息</Link></li>
                    <li><Link to="/pro">付费信息</Link></li>
                    <li><button className="btn">登录</button></li>
                    <li><button className="btn">注销</button></li>
                </ul>
                </div>
            </nav>
        )
    }
}
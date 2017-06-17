import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
class Nav extends Component {

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Logo</Link>
                <Link to="/" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></Link>
                <ul className="right hide-on-med-and-down">
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to="/free">免费信息</Link></li>
                    <li><Link to="/pro">付费信息</Link></li>
                    <li><Link to={{ pathname: '/user/' + 123}} >我的主页</Link></li>
                    <li><Link className="btn" to="/signout">注销</Link></li>
                    <li><Link className="btn" to="/signin">登录</Link></li>    
                </ul>
                <ul className="side-nav" id="mobile-demo">
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to="/free">免费信息</Link></li>
                    <li><Link to="/pro">付费信息</Link></li>
                    <li><Link to={{ pathname: '/user/' + 123}} >我的主页</Link></li>
                    <li><Link className="btn" to="/signout">注销</Link></li>
                    <li><Link className="btn" to="/signin">登录</Link></li>    
                </ul>
                </div>
            </nav>
        )
    }
}

export default Nav
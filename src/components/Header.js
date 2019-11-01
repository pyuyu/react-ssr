import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login, logout } from '../store';

const Header = ({ loggedIn, login, logout }) => (
    <div>
        <Link to="/" className="link">Home</Link>
        <Link to="/about" className="link">About</Link>
        <Link to="/contact" className="link">Contact</Link>
        { 
            loggedIn ? 
            <React.Fragment>
                <Link to="/secret" className="link">Personal Page</Link>
                <button onClick={() => logout()}>Logout</button>
            </React.Fragment> : 
            <button onClick={() => login()}>Login</button> 
        }
    </div>
);

const mapStateToProps = (state) => ({
    loggedIn: state.loggedIn,
});

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => {
            dispatch(login())
        },
        logout: () => {
            dispatch(logout())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

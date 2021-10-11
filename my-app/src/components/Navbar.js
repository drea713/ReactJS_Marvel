import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import firebase from '../firebase';

export const Navbar = () => {
    const { currentUser, signIn, signOut } = useAuth();

    const handleLogin = () => {
        signIn();
        console.log( 'Logged in successfully' );
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Fakebook React</Link>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">

                    {
                            !currentUser.loggedIn
                        ?
                            <li className="nav-item">
                                <Link onClick={() => handleLogin()} className="nav-link" to=".">Login</Link>
                            </li>
                        :
                            <React.Fragment>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/auth/profile">Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link onClick={() => signOut()} className="nav-link" to=".">Logout</Link>
                                </li>
                            </React.Fragment>
                    }

                    
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/auth/register">Register</Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}

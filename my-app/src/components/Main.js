import React, { Component } from 'react';
import '../App.css';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../views/Home';
import { About } from '../views/About';
import { Contact } from '../views/Contact';
import { Login } from '../views/Login';
import { Register } from '../views/Register';
import { Profile } from '../views/Profile';
import { BlogSingle } from '../views/BlogSingle';
import { Navbar } from './Navbar';


export const Main = (props) =>
{
    return (
        <React.Fragment>
            <header>
               <Navbar /> 
            </header>

            <main className="container">
                <Switch>
                    <Route exact path='/' render={() => <Home addPost={props.addPost} />} />
                    <Route exact path='/about' render={() => <About />} />
                    <Route exact path='/contact' render={() => <Contact />} />
                    {/* <Route exact path='/auth/login' render={() => <Login />} /> */}
                    {/* <Route exact path='/auth/register' render={() => <Register />} /> */}
                    <Route exact path='/auth/profile' render={() => <Profile />} />
                    <Route exact path='/blog/:id' render={({ match }) => <BlogSingle match={match} />} />
                </Switch>
            </main>

            <footer>

            </footer>
        </React.Fragment>
    )
}

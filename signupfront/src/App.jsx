import React from 'react'
import {Switch, Link, Route} from 'react-router-dom'
import Signup from './Signup';
import Login from './Login'

const App =() => {
    return (
        <>
        <div>
            <nav>
                <ul>
                <li>
                <Link to="/Signup" className="signup">Signup</Link></li>
               <li> <Link to="/Login" className="login">Login</Link></li></ul>
            </nav>
        </div>
        <Switch>
            <Route path="/Login">
                <Login />
                </Route>
                <Route path ="/Signup">
                    <Signup />
                </Route>
        </Switch>
        </>
    );
}

export default App;
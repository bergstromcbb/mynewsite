import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Resume from "./Resume";
import logo from './images/logo.gif';

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
            <div className="flex-container header">
              <div id="logo">
                <NavLink exact to="/">
                  <img src={ logo } alt="CB LOGO"/>
                </NavLink>
              </div>
              <div><NavLink to="/stuff">About Me</NavLink></div>
              <div><NavLink to="/contact">Portfolio</NavLink></div>
              <div><NavLink to="/resume">Resume</NavLink></div>          
            </div>
          <div className="content">
              <Route exact path="/" component={Home}/>
                <Route path="/stuff" component={Stuff}/>
                <Route path="/resume" component={Resume}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;
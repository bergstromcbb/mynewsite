import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import logo from './images/logo.gif';

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div id="navbar">
            <div className="flex-container header">
              <div id="logo">
                <NavLink exact to="/">
                  <img src={ logo } alt="CB LOGO"/>
                </NavLink>
              </div>
              <div className="navfont"><NavLink to="/stuff">About Me</NavLink></div>
              <div className="navfont"><NavLink to="/portfolio">Portfolio</NavLink></div>
              <div className="navfont"><NavLink to="/resume">Resume</NavLink></div>          
            </div>
          <div className="">
              <Route exact path="/" component={Home}/>
                <Route path="/stuff" component={Stuff}/>
                <Route path="/resume" component={Resume}/>
                <Route path="/portfolio" component={Portfolio}/>                
          </div>
          <div className="bottomheader"></div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;
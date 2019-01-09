import React, { Component } from "react";
import designatedsurvivor from './images/designatedsurvivor.png';
import grandcircustheaters from './images/grandcircustheaters.png';
import grocery from './images/grocery.png';
import isitornot from './images/isitornot.png';
import madlibs from './images/madlibs.png';
import angularRouting from './images/angularRouting.png';
import todo from "./images/todo.png";
import wordwithdec from "./images/wordwithdec.png"
import balls from "./images/balls.png";
import foosball from "./images/foosball.png";
import recipecook from "./images/recipecook.jpg";
import chrysler from "./images/chrysler7.png";
import amplified from "./images/amplifiedTemplates.png";
import kia from "./images/kia.png";
import weather from "./images/weather.png";

class Portfolio extends Component {
  render() {
    return (
        <div>
            <div className="about">Portfolio Page</div>
                <div className="home-text port-container">
                    <div className="portheight">
                            <p className="project">Kia Motors</p>
                            <a href="https://kia.com">
                            <img src={ kia } alt="KIA" className="shadow" width="240"/>
                            </a>
                            <p className="box7">
                            </p>
                    </div>
                    <div className="portheight">
                            <p className="project">Chrysler OnDemand</p>
                            <a href="https://chryslerondemandsmart.com">
                            <img src={ chrysler } alt="OnDemand" className="shadow" width="240"/>
                            </a>
                            <p className="box7">
                            </p>
                    </div>
                    <div className="portheight">
                            <p className="project">Amplifield Mail</p>
                            <a href="https://amplifiedmail.com">
                            <img src={ amplified } alt="Amplified Mail" className="shadow" width="240"/>
                            </a>
                            <p className="box7">
                            </p>
                    </div>      
                    <div className="portheight">
                            <p className="project">What's the Weather</p>
                            <a href="https://bergstromcbb.github.io/weatherApp/">
                            <img src={ weather } alt="Weather App" className="shadow" width="240"/>
                            </a>
                            <p className="box7">
                            </p>
                    </div>
                    <div className="portheight">
                            <p className="project">FoosBall</p>
                            <a href="https://foosball-scores.herokuapp.com">
                            <img src={ foosball } alt="FoosBall" className="shadow" width="240"/>
                            </a>
                            <p className="box7">
                            </p>
                    </div>      
                    <div className="portheight">
                            <p className="project">RecipeCook</p>
                            <a href="https://recipecook.herokuapp.com">
                            <img src={ recipecook } alt="RecipeCook" className="shadow" width="240"/>
                            </a>
                            <p className="box7">
                            </p>
                    </div>
                    <div className="portheight">
                        <p className="project">Designated Survivor</p>
                        <a href="https://bergstromcbb.github.io/Bergstrom/Bergstrom_Bootstrap">
                        <img src={ designatedsurvivor } alt="Fan Site" className="shadow" width="240"/>
                        </a>
                        <p className="box7">
                        </p>
                    </div>
                    <div className="portheight">
                        <p className="project">Theater App</p>
                        <a href="https://bergstromcbb.github.io/midterm_project">
                        <img src={ grandcircustheaters } alt="Theatre App" className="shadow" width="240"/>    
                        </a>
                        <p className="box7">
                        </p>
                    </div>
                    <div className="portheight">
                        <p className="project">Mill's Grocery</p>
                        <a href="https://bergstromcbb.github.io/lab_8_bonus">
                        <img src={ grocery } alt="Mills Grocery" className="shadow" width="240"/>    
                        </a>
                        <p className="box7">
                        </p>
                    </div>
                    <div className="portheight">
                        <p className="project">is it or not</p>
                        <a href="https://bergstromcbb.github.io/codechallenge4">
                        <img src={ isitornot } alt="isitornot" className="shadow" width="240"/>    
                        </a>
                        <p className="box7">
                        </p>
                    </div>
                    <div className="portheight">
                        <p className="project">Mushy Madlibs</p>
                        <a href="https://bergstromcbb.github.io/lab_15_madlibs">
                        <img src={ madlibs } alt="Mushy Madlibs" className="shadow" width="240"/>    
                        </a>
                        <p className="box7">
                        </p>
                    </div>
                    <div className="portheight">
                        <p className="project">Animals & Nature</p>
                        <a href="https://bergstromcbb.github.io/lab_14/#/cat">
                        <img src={ angularRouting } alt="Animals and Nature" className="shadow" width="240"/>    
                        </a>
                        <p className="box7">
                        </p>
                    </div>
                    <div className="portheight">
                        <p className="project">To Do List</p>
                        <a href="https://bergstromcbb.github.io/reddit_lab">
                        <img src={ todo } alt="To do list" className="shadow" width="240"/>    
                        </a>
                        <p className="box7">
                    </p>
                    </div>
                    <div className="portheight">
                        <p className="project">Decorating Words</p>
                        <a href="https://bergstromcbb.github.io/lab_13/">
                        <img src={ wordwithdec } alt="Decorating Words" className="shadow" width="240"/>    
                        </a>
                        <p className="box7">
                        </p>
                    </div>
                    <div className="portheight">
                        <p className="project">It's that time of Year</p>
                        <a href="https://lab-22.herokuapp.com/">
                        <img src={ balls } alt="That time of year" className="shadow" width="240"/>    
                        </a>
                        <p className="box7">
                        </p>
                    </div>
      </div>
      </div>
    );
  }
}
 
export default Portfolio;
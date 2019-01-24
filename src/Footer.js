import React, { Component } from "react";
import insta from './images/icon-04-512.png';
import twitter from './images/twitter.png';
import github from './images/github1.png';


class Home extends Component {
    render() {
        return (
                <div className="bottomheader footer">
                    <div className="footer-container">
                        <div className="footer-item">
                            <a href="https://twitter.com/c_d_bergstrom">
                            <img src={ twitter } alt="twitter" width="40px"/>
                            </a>
                        </div>
                        <div className="footer-item">
                            <a href="https://github.com/bergstromcbb">
                            <img src={ github } alt="github" width="40px"/>
                            </a>
                        </div>
                        <div className="footer-item">
                            <a href="https://www.instagram.com/petuniasponderings/">
                            <img src={ insta } alt="insta" width="40px"/>
                            </a>
                        </div>
                    </div>
                </div> 
        );
    }
}

export default Home;
import React, { Component } from "react";
 
class Stuff extends Component {
  render() {
    return (
      <div>
        <div className="about">A little bit about me</div>
        <div className="home-text">
          I am a creative mother of one amazing 16 year old high school Junior. 
          Four years ago I was talked into a clojure bridge workshop in Detroit.  That day changed my future.
          I went home and plotted about how I was going to make the career change I now knew I made.  See 
          I started my career in web development and then took the path of least resistance.  In 2016 I went to 
          Grand Circus and completed their Front End Bootcamp.  A month later I started my first postion as a 
          developer and have yet to look back.  I have had the opportunity to try so many things especially in 
          late 2018 having taken some great contract positions.  I am looking forward to great things in 2019 and 
          excited for the amazing opportunities the year holds.
          <br />
          <div className="p-25">Some of the fun things coming are:
            <br />
            <ul className="aboutlist">
              {/* <li>Detroit Organizer for Lesbians in Tech and Allies</li> */}
              <li className="aboutListItem">Student Affinity Group at Grand Circus</li>
              <li className="aboutListItem">The new Detroit Chapter of Women Who Code</li>
              <li className="aboutListItem">Moms who Code and Can</li>
              <li className="aboutListItem">Mentoring new female developers</li>
              <li className="aboutListItem">Speaking at conferences</li>
              <li className="aboutListItem">Helping advocate for LGBTQIA and Female or Female identifying developer in my community</li>
              <li className="aboutListItem">Showing people at all ages it is never too late to follow your dreams</li>
              <li className="aboutListItem">Showing my kiddo that ANYTHING is possible</li>
            </ul>
           </div>
            Happy Day!
        </div>
      </div>
    );
  }
}
 
export default Stuff;
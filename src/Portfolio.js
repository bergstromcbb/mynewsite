import React, { Component } from "react";

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
        projects: [
            { id: 1, tech: "HTML5 CSS3", name: "Kia Motors", year: "2018", link:"https://kia.com", image: "https://photos.smugmug.com/My-First-Gallery/i-2mBV7nh/0/d6242b18/XL/kia-XL.png", alt: "KIA"},
            { id: 2, tech: "HTML5 CSS3", name: "Amplified Mail", year: "2017-2018", link:"https://amplifiedmail.com", image: "https://photos.smugmug.com/My-First-Gallery/i-vjqxXgW/0/4f8d6619/L/amplifiedTemplates-L.png", alt: "Amplified"},
            { id: 3, tech: "HTML5 CSS3", name: "Chrysler OnDemand", year: "2017-2018", link:"https://chryslerondemandsmart.com", image: "https://photos.smugmug.com/My-First-Gallery/i-GLFsvKS/0/f68853a0/L/Chrysler1-L.png", alt: "OnDemand"},
            { id: 4, tech: "HTML5 CSS3 Angular 7", name: "Wedding Seating", year: "2019", link:"https://bergstromcbb.github.io/weddingSeating/", image: "https://photos.smugmug.com/My-First-Gallery/i-bHJ97Sc/0/41180c4a/XL/wedding-XL.png", alt: "Wedding"},
            { id: 5, tech: "HTML5 CSS3 ReactJS Sass", name: "What's the Weather", year: "2018", link:"https://bergstromcbb.github.io/weatherApp/", image: "https://photos.smugmug.com/My-First-Gallery/i-fCJBNjs/0/3b951878/L/weather-L.png", alt: "Weather App"},
            { id: 6, tech: "HTML5 CSS3 NodeJS Express MongoDB PassportJS", name: "FoosBall Scores", year: "2018", link:"https://foosball-scores.herokuapp.com", image: "https://photos.smugmug.com/My-First-Gallery/i-FRH4NRD/0/7178c2fb/X2/foosball-X2.png", alt: "FoosBall"},
            { id: 7, tech: "HTML5 CSS3 AngularJS", name: "RecipeCook", year: "2016", link:"https://recipecook.herokuapp.com", image: "https://photos.smugmug.com/My-First-Gallery/i-sGZJHwS/0/4fb97f06/XL/recipecook-XL.jpg", alt: "RecipeCook"},
            { id: 8, tech: "HTML5 CSS3 Bootstrap", name: "Designated Survivor", year: "BootCamp 2016", link:"https://bergstromcbb.github.io/Bergstrom/Bergstrom_Bootstrap", image: "https://photos.smugmug.com/My-First-Gallery/i-NHMzGKf/0/7736fb78/XL/designatedsurvivor-XL.png", alt: "Fansite"},
            { id: 9, tech: "HTML5 CSS3 Flexbox", name: "Movie Theatre Seating", year: "BootCamp 2016", link:"https://bergstromcbb.github.io/midterm_project", image: "https://photos.smugmug.com/My-First-Gallery/i-frDwpb7/0/7cd31862/XL/grandcircustheaters-XL.png", alt: "MidTerm"},
            { id: 10, tech: "HTML5 CSS3 JS", name: "Mill's Grocery", year: "BootCamp 2016", link:"https://bergstromcbb.github.io/lab_8_bonus", image: "https://photos.smugmug.com/My-First-Gallery/i-HgJjt7P/0/b5d13f42/XL/grocery-XL.png", alt: "Mill's"},
            { id: 11, tech: "HTML5 CSS3 JS", name: "Is it or isn't it", year: "2016", link:"https://bergstromcbb.github.io/codechallenge4", image: "https://photos.smugmug.com/My-First-Gallery/i-DnTXTv7/0/f73fd93d/XL/isitornot-XL.png", alt: "palindrome"},
            { id: 12, tech: "HTML5 CSS3 JS", name: "Mushy MadLibs", year: "BootCamp 2016", link:"https://bergstromcbb.github.io/lab_15_madlibs", image: "https://photos.smugmug.com/My-First-Gallery/i-4qpZnQr/0/2907f6cb/XL/madlibs-XL.png", alt: "MadLibs"},
            { id: 13, tech: "HTML5 CSS3 AngularJS Express", name: "Animals & Nature", year: "BootCamp 2016", link:"https://bergstromcbb.github.io/lab_14/#/ca", image: "https://photos.smugmug.com/My-First-Gallery/i-svhTC25/0/c5aaa53e/XL/angularRouting-XL.png", alt: "Routing"},
            { id: 14, tech: "HTML5 CSS3 JS", name: "To Do List", year: "BootCamp 2016", link:"https://bergstromcbb.github.io/lab_12", image: "https://photos.smugmug.com/My-First-Gallery/i-2hCgSHm/0/8034139e/XL/todo-XL.png", alt: "Todo"},
            { id: 15, tech: "HTML5 CSS3 JS", name: "Decorating Words", year: "BootCamp 2016", link:"https://bergstromcbb.github.io/lab_13/", image: "https://photos.smugmug.com/My-First-Gallery/i-sstZK6B/0/b10b4a8a/XL/wordwithdec-XL.png", alt: "Decorating"},
            { id: 16, tech: "HTML5 CSS3 NodeJS Express", name: "It's that time of the year", year: "BootCamp 2016", link:"https://lab-22.herokuapp.com/", image: "https://photos.smugmug.com/My-First-Gallery/i-jTfp7DB/0/ee0bb7c0/XL/balls-XL.png", alt: "lab22"},
            { id: 17, tech: "HTML5 CSS3 VueJS", name: "Books, Books, and more Books", year: "2019", link:"https://bergstromcbb.github.io/sundayfunday/", image: "https://photos.smugmug.com/My-First-Gallery/i-wLVLjNd/0/59d467b5/X2/sundayfunday-X2.png", alt: "books"},
        ]
      }
    }
  render() {
    return (
        <div>
            <div className="about">Portfolio Page</div>
            <div className="flex flex-wrap -m-3 body-container"> 
                    {this.state.projects.map((projects)=> (
                        <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3" key={ projects.id }>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
                                <div className="bg-cover h-48 pink-border" style={{ backgroundImage: `url(${ projects.image })`  }}></div>
                                <div className="p-4 flex-1 flex flex-col" style={{}}>
                                    <a href={ projects.link }>
                                    <h3 className="mb-4 text-2xl">{ projects.name }</h3>
                                    </a>
                                    <div className="mb-4 text-grey-darker text-sm flex-1">
                                    <p> { projects.year } </p>
                                    </div>
                                    <div className="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide" style={{}}>
                                        Tech Used: { projects.tech }<br />
                                    </div>
                                </div>
                            </div>  
                        </div>
                    ))}
            </div>
         </div>
    );
  }
}
 
export default Portfolio;
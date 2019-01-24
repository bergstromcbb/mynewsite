import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import Footer from "./Footer";
import "./index.css";
 


ReactDOM.render(
  // <Wrapper  />,
  [<Main key="1"/>, <Footer key="2"/>], document.getElementById("root")
);
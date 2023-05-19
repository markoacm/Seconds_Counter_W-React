//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 0;

setInterval(function() {
        
        const timer6 = Math.floor(counter/100000);
        const timer5 = Math.floor(counter/10000);
        const timer4 = Math.floor(counter/1000);
        const timer3 = Math.floor(counter/100);
        const timer2 = Math.floor(counter/10);
        const timer1 = Math.floor(counter/1);

        counter++;

        ReactDOM.render(<Home digitOne={timer1} digitTwo={timer2} digitThree={timer3} digitFour={timer4} digitFive={timer5} digitSix={timer6} />, document.querySelector("#app")
        );
    }, 1000);


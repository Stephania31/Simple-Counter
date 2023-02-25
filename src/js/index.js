//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/secondCounter.jsx";

let tiempoSegundos = 0
let decenaSeconds=0
let centenaSeconds =0 

setInterval(() => {
    tiempoSegundos = tiempoSegundos + 1

if(tiempoSegundos%10==0 && tiempoSegundos!=0){
    tiempoSegundos=0
    decenaSeconds++
}
if(decenaSeconds%6==0 && decenaSeconds!=0){
    decenaSeconds=0
    centenaSeconds++
} 
//render your react application
ReactDOM.render(<SecondsCounter centenaSeconds={centenaSeconds} decenaSeconds={decenaSeconds} seconds={tiempoSegundos} />, document.querySelector("#app"));
        
}, 1000)




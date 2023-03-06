//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/secondCounter.jsx";

let tiempoSegundos = 0
let decenaSeconds = 0
let centenaSeconds = 0 
let unidadDeMilSeconds = 0
let decenaDeMilSeconds = 0
let centenaDeMilSeconds = 0


setInterval(() => {
    tiempoSegundos = tiempoSegundos + 1

if(tiempoSegundos%10==0 && tiempoSegundos!=0){
    tiempoSegundos=0
    decenaSeconds++
}

if(decenaSeconds%6==0 && decenaSeconds!=0){
    tiempoSegundos=0
    decenaSeconds=0
    centenaSeconds++
} 
if(centenaSeconds%10==0 && centenaSeconds!=0){
    decenaSeconds=0
    centenaSeconds=0
    unidadDeMilSeconds++
} 
if(unidadDeMilSeconds%6==0 && unidadDeMilSeconds!=0){
    centenaSeconds=0
    unidadDeMilSeconds=0
    decenaDeMilSeconds++
} 
if(decenaDeMilSeconds%10==0 && decenaDeMilSeconds!=0){
    unidadDeMilSeconds=0
    decenaDeMilSeconds=0
    centenaDeMilSeconds++
} 
if(centenaDeMilSeconds%6==0 && centenaDeMilSeconds!=0){
    decenaDeMilSeconds=0
    centenaDeMilSeconds=0
   
} 

//render your react application
ReactDOM.render(<SecondsCounter centenaDeMilSeconds={centenaDeMilSeconds} decenaDeMilSeconds={decenaDeMilSeconds} unidadDeMilSeconds={unidadDeMilSeconds} centenaSeconds={centenaSeconds} decenaSeconds={decenaSeconds} seconds={tiempoSegundos} />, document.querySelector("#app"));
        
}, 1000)



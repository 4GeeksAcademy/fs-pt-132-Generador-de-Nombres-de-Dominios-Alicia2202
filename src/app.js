import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let dom = ['.com', '.es', '.io'];

pronoun.forEach(i =>{
  adj.forEach(j =>{
    noun.forEach(k =>{
      dom.forEach(l =>{
        console.log(`${i}${j}${k}${l}`)
      })
    })
  })
})
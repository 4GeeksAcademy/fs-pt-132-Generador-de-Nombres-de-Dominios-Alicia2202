import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon', 'traves', 'heroes', 'genio', 'studio', 'telecom', 'microcom'];
  let dom = ['.com', '.es', '.io'];

  pronoun.forEach(i => {
    adj.forEach(j => {
      noun.forEach(k => {
        dom.forEach(l => {
          console.log(`${i}${j}${k}${l}`)

          //Para quitar el punto de la extensión 
          let extensionPura = l.substring(1);
          //Condicional si el noun termina en el dominio sin el punto (extensionPura)
          if (k.endsWith(extensionPura)){
            //Creamos una variable en el que cortemos el noun desde el inicio hasta lo que coincide con el dominio
            let nounShort = k.substring(0, k.length - extensionPura.length);
            //Concatenamos todo junto con el nombre cortado más el dominio
            console.log(`${i}${j}${nounShort}${l}`);

          }
        })
      })
    })
  })
  console.log("Hello Rigo from the console!");
};


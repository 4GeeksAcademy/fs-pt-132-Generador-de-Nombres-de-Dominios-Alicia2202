import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon', 'traves', 'heroes', 'genio', 'studio', 'telecom', 'microcom'];
  let dom = ['.com', '.es', '.io'];

  const createDomains = (pronoun, adj, noun, dom) => {
    return `${pronoun}${adj}${noun}${dom}`
  };

  const applyDomainHack = (pronoun, adj, noun, dom) => {
    //Quita el punto de la extensión
    let extensionPura = dom.substring(1);
    if (noun.endsWith(extensionPura)) {
      //Creamos una variable en el que cortemos el noun desde el inicio hasta lo que coincide con el dominio
      let nounShort = noun.substring(0, noun.length - extensionPura.length);
      return `${pronoun}${adj}${nounShort}${dom}`
    };
  };

  const buildDomain = (pronoun, adj, noun, dom) => {
    pronoun.forEach(i => {
      adj.forEach(j => {
        noun.forEach(k => {
          dom.forEach(l => {
            const domain =
              applyDomainHack(i, j, k, l) || createDomains(i, j, k, l);

            console.log(domain);

          });
        });
      });
    });
  };
  console.log(buildDomain(pronoun, adj, noun, dom));
};

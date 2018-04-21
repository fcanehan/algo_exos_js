var message="tiens viens boire un coup";
var longueur= length(message);
console.log(message + " : " + longueur);

var toto = document.getElementById("resultat");
var noeudtexte = document.createTextNode(message +" : "+ longueur);

toto.appendChild(noeudtexte);


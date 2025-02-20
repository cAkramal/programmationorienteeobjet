let voiture = {
    // prorpriétés de la voiture
    couleur : " jaune ",
    forme : "arrondie",
    taille : "petite",

    // Méthodes de la voiture
    demarrer : function() {
        console.log("Vvvvvvrrruummmmmm !!!")
    },

    avancer : function() {
        console.log("Vrum vrum vrum vrum !!!")
    },

    reculer : function() {
        console.log("bip bip bip !!!")
    },
};

// faire appel à la méthode démarrer de la voiture
voiture.demarrer();
voiture.avancer();
voiture.reculer();

// Pour afficher le type de la variable "Voiture"
console.log(typeof voiture);

console.log(voiture.couleur);

console.log(voiture.taille);

console.log(voiture.forme);

// La valeur de la propriété taille devient "petite"

voiture.taille = " vraiment petite";

// Voiture(c,f,t) fonction constructeur d'objet voiture 
function Voiture(c,f,t) {
// Propriété de chaque modèle d'objet voiture à construire
this.couleur = c;
this.forme = f;
this.taille = t;

// Méthode de chaque modèle d'objet voiture à construire
this.demarrer = function(){
    console.log("Vvvrrrruummmm !!!");
}

this.avancer = function(){
    console.log("Vrumvrumvrumvrum !!!");
}

this.reculer = function(){
    console.log("Bipbipbipbipbip !!!");
}
};

// Crée une voiture à partir du constructeur d'objet Voiture
// Grâce au mot-clé "new"
let voiture1 = new Voiture("rouge", "carré","grande");

console.log(voiture1.couleur);

voiture1.demarrer();
voiture1.avancer();
voiture1.reculer();


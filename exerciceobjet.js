// Utilisateur(nom, prenom, dateNaissance, villeResidence, age) fonction constructeur d'objet utilisateur 
function Utilisateur(nom, prenom, dateNaissance, villeResidence, age) {
    // Propriété de chaque modèle d'objet utilisateur à construire
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = dateNaissance;
    this.villeResidence = villeResidence;
    this.age = age;
    
    // Méthode de chaque modèle d'objet utilisateur à construire
    this.courrir = function(){
        console.log("je cours");
    }
    
    this.marcher = function(){
        console.log("je marche");
    }
    
    this.sauter = function(){
        console.log("je saute");
    }

    this.lire = function(){
        console.log("je lis");
    }

    this.ecrire = function(){
        console.log("j'écris");
    }

    this.reciter = function(){
        console.log("je récite");
    } 
};


let utilisateur1 = new Utilisateur("Bacar", "Said", "05/04/1996", "Sada", 45);
let utilisateur2 = new Utilisateur("Saad", "Foulane", "15/04/1974", "Beyrouth", 35);
let utilisateur3 = new Utilisateur("Soula", "Souffou", "24/04/1941", "Addis Abad", 65);
let utilisateur4 = new Utilisateur("Assad", "Kamal", "06/04/1995", "Dar es Salam", 25);
let utilisateur5 = new Utilisateur("Jean", "Philippe", "03/04/1925", "Ougadougou", 55);

console.log(utilisateur2.prenom);

utilisateur2.reciter();
// class. Crée la classe Document grâce au mot-clé class
class Document {
    
    // Définissons le constructeur de la classe grâce au mot-clé constructor
    constructor(titre, nombrePage, auteur){
        this.titre = titre;
        this.nombrePage = nombrePage;
        this.auteur = auteur;
    }

    // Méthode description de la classe Document
    description(){
        console.log("Le titre du document est ", this.titre);
        console.log("L'auteur est ", this.auteur);
        console.log("Le document contient", this.nombrePage, "pages");
    } 
}

// crée plusieurs documents similaires à partir du modèle de Document
let documentHtml = new Document("Introduction au HTML", 35, "Nourdine Combo");
let documentCss = new Document("Apprendre le CSS", 15, "Ali Fahar");
let documentJavaScript = new Document("Introduction au JavaScript", 55, "Nissay Abdou");
let documentMysql = new Document("Apprendre MySQL", 35, "Fatima Ali"); 


// crée plusieurs documents similaires à partir du modèle de Document
let documentHtml1 = new Document("Introduction au HTML", 35, "Nourdine Combo");

// Classe enfant Livre étendue de la classe Document
class Livre extends Document {
    // Constructeur de la classe Livre
    constructor(titre, nombrePage, auteur, maisonEdition) {
        // Propriétes héritées de la classe parent Document
        // super() appelle au constructeur de la classe parent Document
        super(titre, nombrePage, auteur);
        // Propriété spécifique de la classe enfant Livre
        this.maisonEdition = maisonEdition;
    }

    // Méthode spécifique à la classe Livre 
    convertirPdf(){
        console.log("Je convertis le Livre en PDF.");
    } 
}

// crée plusieurs exemplaires de Livre.
// En programmation, on dit : je crée une instance de la classe Livre
let livreInformatique = new Livre("Informatique c'est facile", 45, "Bacar Koutsi", "Ylang edition"); 
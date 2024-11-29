// Réalisé par Lucas Danneaux
class QuestionnaireModel extends Observable {

    constructor() {
        super();
        this.questions = [
            {
                question: "Fréquence de course",
                options: ["Moins d'une fois par semaine", "Au moins une fois par semaine", "Entre 1 et 2 fois par semaine", "Plus de 2 fois par semaine"],
            },
            {
                question: "Durée des entrainements",
                options: ["Jusqu'à 30 minutes", "De 30 minutes à 1 heure", "De 1 heure à 2 heures", "Au delà de 2 heures"],
            },
            {
                question: "Que souhaitez vous développer en priorité ?",
                options: ["Endurance", "Technique de sprint", "Renforcement musculaire"],
            }];
        this.reponses = [];
        this.numero = 0;
    }

    getQuestionActuel() {
        return this.questions[this.numero] || null;
    }

    repondre(option) {
        const questionActuel = this.getQuestionActuel();
        if (questionActuel) {
            this.reponses.push({ question: questionActuel.question, reponse: option });
            this.numero++;
            this.setChanged(); 
            this.notifyObservers(); 
        }
    }

    termine() {
        return this.numero >= this.questions.length;
    }

    resume() {
        return this.reponses;
    }

    recommencer() {
        this.reponses = [];
        this.numero = 0;
        this.setChanged(); 
        this.notifyObservers(); 
    }
}
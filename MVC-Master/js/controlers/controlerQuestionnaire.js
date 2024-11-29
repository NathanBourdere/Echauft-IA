// Réalisé par Lucas Danneaux
class QuestionnaireController {

    constructor(model) {
        this.model = model;
        this.view = new QuestionnaireView();

        this.model.addObservers(this.view);

        this.view.boutonValide((reponseChoisi) => this.questionSuivante(reponseChoisi));
        this.view.boutonRestart(() => this.recommencer());
        this.view.boutonValidate(() => window.location.href = 'accueil.html')

        this.model.setChanged();
        this.model.notifyObservers();
    }

    questionSuivante(reponseChoisi) {
        this.model.repondre(reponseChoisi);
    }

    recommencer() {
        this.model.recommencer()
    }
}
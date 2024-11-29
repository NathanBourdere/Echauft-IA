class UpdateNotes extends Observer {
    constructor(view){
      super();
      this.view = view;
    }
  
    update(observable, object){
    this.view.notes = this.view.notes.filter(uneNote => 
        uneNote.title.toLowerCase().includes(object.toLowerCase())
    );
    this.view.displayNotes();
    }
  }

class ControlerEchauff {

    constructor(model){
  
        this.view = new ViewEchauff();
        this.model = model;

        // update
        const noteObserver = new UpdateNotes(this.view);
        this.model.addObservers(noteObserver);

        this.view.echauffAdd.addEventListener("click", (e) => {

            let dateInput = prompt("Date de l'échauffement");
            let objectifInput = prompt('Objectif de l\'échauffement');
            let exerciceInput = prompt('Exercices');
            let dureeInput = prompt('Durée de l\'échauffement');
            let noteInput = prompt('Note (/5)');
            let descriptionInput = prompt('Description complète');
            this.view.historique.push(new ModelEchauff(dateInput, objectifInput, exerciceInput, dureeInput, noteInput, descriptionInput))
            this.view.afficherEchauffement()
            
                
               
        });

    }
}
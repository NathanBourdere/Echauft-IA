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

class ControlerNote {

    constructor(model){
  
        this.view = new ViewNote();
        this.model = model;

        // update
        const noteObserver = new UpdateNotes(this.view);
        this.model.addObservers(noteObserver);

        // action
        this.view.searchBar.addEventListener("input", (e) => {
            this.model.getByTitle(e.target.value.toLowerCase());
        });
        //je veux ajouter un create notes 
        this.view.noteAdd.addEventListener("click", (e) => {
                this.view.addNote();
        });
        //je veux generer des notes aléatoires
        this.view.noteGenerate.addEventListener("click", (e) => {
             console.log("Controller: generation des notes")             
             for (let i = 0; i < 10; i++) {
                 this.view.notes.push(new ModelNote(`note ${i}`, `Description ${i}`, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa suscipit sit eum tempore nihil commodi dolores! Nostrum, iusto veniam. Animi, iure? Laudantium sint harum fugiat aliquam, amet eos nisi?"));
                }
                this.view.displayNotes()
        });
        this.view.noteAdd.addEventListener("click", (e) => {
            let titleInput = prompt('Titre de la note');
            let smallDescriptionInput = prompt('Description courte');
            let descriptionInput = prompt('Description complète');
            this.view.notes.push(new ModelNote(titleInput, smallDescriptionInput, descriptionInput));
            this.view.displayNotes();
        });
    }
}
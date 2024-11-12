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
        this.view.noteList.addEventListener("click", (e) => {
            if(e.target.classList.contains('btn-primary')){
                this.model.addNote();
            }
        });

    }
}
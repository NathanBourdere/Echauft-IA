class UpdateTrainings extends Observer {
    constructor(view){
      super();
      this.view = view;
    }
  
    update(observable, object){
    this.view.trainings = this.view.trainingsDB.filter(training => 
        training.name.toLowerCase().includes(object.toLowerCase())
    );
    this.view.displayTrainings();
    }
  }

class ControlerEntrainements {

    constructor(model){
  
        this.view = new ViewEntrainements();
        this.model = model;

        // update
        const trainingsObserver = new UpdateTrainings(this.view);
        this.model.addObservers(trainingsObserver);

        // action
        this.view.searchBar.addEventListener("input", (e) => {
            this.model.getByName(e.target.value.toLowerCase());
        });

    }
}
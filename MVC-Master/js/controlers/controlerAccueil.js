class UpdateChronometer extends Observer {
  constructor(view){
    super();
    this.view = view;
  }

  update(observable, object){
    this.view.toggleControls(observable.isPaused === true);
    let time = observable.getTime();
    if (time === "00:00:00"){
      time = "S";
    }
    this.view.chronometerDisplay.innerHTML = time;
  }
}

class ControlerAccueil {

  constructor(model){

      this.view = new ViewAccueil();
      this.model = model;

      // update
      const chronometerObserver = new UpdateChronometer(this.view);
      this.model.addObservers(chronometerObserver);

      //  action
      this.view.centralButton.addEventListener("click", () => this.model.interval === null ? this.model.start() : this.model.pause());
      this.view.startButton.addEventListener("click", () => this.model.start());
      this.view.stopButton.addEventListener("click", () => this.model.stop());
    
  }
}

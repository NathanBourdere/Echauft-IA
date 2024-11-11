class ModelEntrainements extends Observable {
    constructor(name,workingMuscles,reps,sets,image) {
        super();
        this.name = name;
        this.workingMuscles = workingMuscles;
        this.reps = reps;
        this.sets = sets;
        this.image = image;
    }

    getByName(name){
        this.setChanged();
        this.notifyObservers(name);
    }
}
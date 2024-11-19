class ModelEchauff extends Observable {
    constructor(title,objectif, exercice, duree, note ,description) {
        super();
        this.title = title;
        this.objectif = objectif;
        this.exercice = exercice;
        this.duree = duree;
        this.note = note;
        this.description = description;
    }
    setByTitle(title){
        this.title = title;
    }
    setByObjectif(objectif){
        this.objectif = objectif;
    }
    setByExercice(exercice){
        this.exercice = exercice;
    }
    setByDuree(duree){
        this.duree = duree;
    }
    setByNote(note){
        this.note = note;
    }
    setByDescription(description){
        this.description = description;
    }
    getTitle(){
        return this.title;
    }
    getObjectif(){
        return this.objectif;
    }
    getExercice(){
        return this.exercice;
    }
    getDuree(){
        return this.duree;
    }
    getNote(){
        return this.note;
    }
    getDescription(){
        return this.description;
    }
    
}
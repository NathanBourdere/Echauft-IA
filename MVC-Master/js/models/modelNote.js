class ModelNote extends Observable {
    constructor(title,smallDescription,description) {
        super();
        this.title = title;
        this.smallDescription = smallDescription;
        this.description = description;
    }

    getByTitle(title){
        this.setChanged();
        this.notifyObservers(title);
    }
    
}
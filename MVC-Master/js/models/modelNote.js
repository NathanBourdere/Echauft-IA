class ModelNote extends Observable {
    constructor(title,smallDescription,description) {
        super();
        this.title = title;
        this.smallDescription = smallDescription;
        this.description = description;
    }
    setByTitle(title){
        this.title = title;
    }
    setBySmallDescription(smallDescription){
        this.smallDescription = smallDescription;
    }
    setByDescription(description){
        this.description = description;
    }
    getTitle(){
        return this.title;
    }
    getSmallDescription(){
        return this.smallDescription;
    }
    getDescription(){
        return this.description;
    }
    
}
class ModelAccueil extends Observable {
    constructor() {
        super();
        this.time = 0;
        this.interval = null;
        this.isPaused = false;
    }

    start() {
        this.isPaused = false;
        if (!this.interval) {
            this.interval = setInterval(() => {
                this.time++;
                this.setChanged();
                this.notifyObservers();
            }, 1000);
        }
    }

    stop() {
        this.isPaused = false;
        clearInterval(this.interval);
        this.interval = null;
        this.time = 0;
        this.setChanged();
        this.notifyObservers();
    }

    pause() {
        clearInterval(this.interval);
        this.interval = null;
        this.isPaused = true;
        this.setChanged();
        this.notifyObservers();
    }

    getTime() {
        const hours = String(Math.floor(this.time / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((this.time % 3600) / 60)).padStart(2, '0');
        const seconds = String(this.time % 60).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }
}
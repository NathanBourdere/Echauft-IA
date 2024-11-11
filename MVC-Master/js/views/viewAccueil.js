class ViewAccueil {
  constructor() {
    
      // Créer la section principale du chronomètre
const chronometerSection = document.createElement('div');
chronometerSection.id = 'chronometer-section';
chronometerSection.className = 'd-flex flex-column align-items-center my-4';

const centralButton = document.createElement('button');
centralButton.id = 'centralButton';
centralButton.className = 'btn btn-secondary rounded-circle';
centralButton.style.width = '250px';
centralButton.style.height = '250px';

const chronometerDisplay = document.createElement('span');
chronometerDisplay.id = 'chronometerDisplay';
chronometerDisplay.className = 'display-4 fw-bold';
chronometerDisplay.textContent = 'S';

centralButton.appendChild(chronometerDisplay);

const chronometerControls = document.createElement('div');
chronometerControls.id = 'chronometer-controls';
chronometerControls.className = 'd-flex mt-3';

const startButton = document.createElement('button');
startButton.id = 'startButton';
startButton.className = 'btn btn-secondary mx-2';

const startText = document.createElement('span');
startText.className = 'fw-bold';
startText.textContent = 'Start';

startButton.appendChild(startText);

const stopButton = document.createElement('button');
stopButton.id = 'stopButton';
stopButton.className = 'btn btn-secondary mx-2';

const stopText = document.createElement('span');
stopText.className = 'fw-bold';
stopText.textContent = 'Stop';

stopButton.appendChild(stopText);

chronometerControls.appendChild(startButton);
chronometerControls.appendChild(stopButton);

chronometerSection.appendChild(centralButton);
chronometerSection.appendChild(chronometerControls);

document.getElementsByTagName("main")[0].appendChild(chronometerSection);

this.centralButton = centralButton;
this.startButton = startButton;
this.stopButton = stopButton;
this.chronometerDisplay = chronometerDisplay;
this.toggleControls(false);

  }


toggleControls(visible) {
    this.stopButton.style.display = visible ? 'flex' : 'none';
    this.startButton.style.display = visible ? 'flex' : 'none';
}
}

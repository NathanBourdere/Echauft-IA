class ViewEntrainements {
    constructor() {
        this.searchBar = document.getElementById('searchInput');
        this.trainingList = document.getElementById('training-list');
        
        this.trainings = [
            { name: "Pompes", workingMuscles: "Pectoraux, Triceps, Épaules", reps: 15, sets: 4, image: "path/to/image/pompes.jpg" },
            { name: "Squats", workingMuscles: "Quadriceps, Fessiers, Ischio-jambiers", reps: 20, sets: 4, image: "path/to/image/squats.jpg" },
            { name: "Tractions", workingMuscles: "Dos, Biceps", reps: 10, sets: 3, image: "path/to/image/tractions.jpg" },
            { name: "Crunchs", workingMuscles: "Abdominaux", reps: 25, sets: 4, image: "path/to/image/crunchs.jpg" },
            { name: "Planche", workingMuscles: "Abdominaux, Épaules", reps: "60s", sets: 3, image: "path/to/image/planche.jpg" },
            { name: "Fentes", workingMuscles: "Quadriceps, Fessiers", reps: 15, sets: 4, image: "path/to/image/fentes.jpg" },
            { name: "Développé Couché", workingMuscles: "Pectoraux, Triceps", reps: 12, sets: 4, image: "path/to/image/developpe.jpg" },
            { name: "Soulevé de Terre", workingMuscles: "Dos, Jambes", reps: 10, sets: 3, image: "path/to/image/souleve.jpg" },
            { name: "Burpees", workingMuscles: "Corps Complet", reps: 15, sets: 4, image: "path/to/image/burpees.jpg" },
            { name: "Mountain Climbers", workingMuscles: "Abdominaux, Épaules", reps: 30, sets: 3, image: "path/to/image/mountain.jpg" }
        ];

        this.trainingsDB = [...this.trainings]; // Utiliser une copie des entraînements comme référence
        this.displayTrainings();
    }

    showDetails(trainingItem) {
        const detailsDiv = trainingItem.querySelector('.details');
        detailsDiv.classList.toggle('d-none');
    }

    displayTrainings() {
        this.trainingList.innerHTML = '';

        this.trainings.forEach(training => {
            const trainingItem = document.createElement('div');
            trainingItem.className = 'd-flex flex-column align-items-start p-2 bg-white rounded shadow-sm mb-3';

            // Création de la première ligne avec image, titre, muscles
            const mainRow = document.createElement('div');
            mainRow.className = 'd-flex align-items-center w-100';

            const trainingImage = document.createElement('img');
            trainingImage.src = training.image;
            trainingImage.alt = training.name;
            trainingImage.style.width = '50px';
            trainingImage.style.height = '50px';
            trainingImage.className = 'rounded me-3';

            const trainingDetails = document.createElement('div');
            trainingDetails.className = 'text-start';

            const trainingName = document.createElement('p');
            trainingName.className = 'fw-bold m-0';
            trainingName.textContent = training.name;

            const trainingPart = document.createElement('p');
            trainingPart.className = 'text-muted m-0';
            trainingPart.textContent = 'Partie travaillée: ' + training.workingMuscles;

            const detailButton = document.createElement('button');
            detailButton.className = 'btn btn-dark btn-sm ms-auto';
            detailButton.textContent = 'Détails';
            detailButton.addEventListener('click', () => {
                this.showDetails(trainingItem);
            });

            // Détails cachés
            const detailsItem = document.createElement('div');
            detailsItem.className = 'details d-none';
            detailsItem.style.backgroundColor = 'lightgrey';
            detailsItem.style.width = '100%';
            detailsItem.style.padding = '8px';
            detailsItem.textContent = `Détails pour ${training.name}: ${training.reps} répétitions, ${training.sets} séries`;

            // Assemblage des éléments
            trainingDetails.appendChild(trainingName);
            trainingDetails.appendChild(trainingPart);
            mainRow.appendChild(trainingImage);
            mainRow.appendChild(trainingDetails);
            mainRow.appendChild(detailButton);

            trainingItem.appendChild(mainRow);
            trainingItem.appendChild(detailsItem);

            this.trainingList.appendChild(trainingItem);
        });
    }
}

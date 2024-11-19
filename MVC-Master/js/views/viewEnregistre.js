function generateStars(note) {
    const maxStars = 5;
    let stars = '';
    for (let i = 0; i < maxStars; i++) {
        if (i < note) {
            stars += '★'; // étoile pleine
        } else {
            stars += '☆'; // étoile vide
        }
    }
    return stars;
}

class ViewEchauff {
    constructor() {
        this._enregistre = document.getElementById("enregistre");
        this.echaufflist = document.getElementById("echauffement-list");
        this.echauffAdd = document.getElementById("echauffAdd");
        this.historique = [];
        console.log("View: ", this.echauffAdd);
    }

    afficher() {
        this._enregistre.style.display = "block";

    }

    showDetails(elem) {
        const detailsDiv = elem.querySelector('.details');
        detailsDiv.classList.toggle('d-none');
    }
    removeEchauff(elem) {
        this.historique = this.historique.filter(unEchauffement => unEchauffement !== elem);
        this.afficherEchauffement();
        console.log(this.historique);
    }

    

    afficherEchauffement() {   
        console.log(this.historique)
        this.echaufflist.innerHTML = '';
        this.historique.forEach(unEchauffement => {
            
            //grosse boite
            const echauffementItem = document.createElement('div');
            echauffementItem.className = 'd-flex flex-column align-items-start p-2 bg-white rounded shadow-sm mb-3';

            const mainRow = document.createElement('div');
            mainRow.className = 'd-flex align-items-center w-100';


            //petite boite
            const echauffementName = document.createElement('p');
            echauffementName.className = 'fw-bold m-0';
            echauffementName.textContent = 'Date : '+unEchauffement.getTitle();
    
            const echauffementObjectif = document.createElement('p');
            echauffementObjectif.className = 'text-muted m-0';
            echauffementObjectif.textContent = 'Objectif : '+unEchauffement.getObjectif();
    
            const echauffementExercice = document.createElement('p');
            echauffementExercice.className = 'text-muted m-0';  
            echauffementExercice.textContent = 'Exercices réalisés : '+unEchauffement.getExercice();
    
            const echauffementDuree = document.createElement('p');
            echauffementDuree.className = 'text-muted m-0';
            echauffementDuree.textContent = "Durée de l'échauffement : "+unEchauffement.getDuree();
    
            const echauffementNote = document.createElement('p');
            echauffementNote.className = 'text-muted m-0';
            echauffementNote.textContent = 'Note : ' + generateStars(unEchauffement.getNote());
    
            // const echauffementDescription = document.createElement('p');
            // echauffementDescription.className = 'text-muted m-0';
            // echauffementDescription.textContent = unEchauffement.getDescription();

            const detailButton = document.createElement('button');
            detailButton.className = 'btn btn-dark btn-sm ms-auto';
            detailButton.textContent = 'Détails : ';
            detailButton.addEventListener('click', () => {
                this.showDetails(echauffementItem);
            });

            const removeButton = document.createElement('button');
            removeButton.className = 'btn btn-danger btn-sm ms-auto';
            removeButton.textContent = 'remove';
            removeButton.addEventListener('click', () => {
                this.removeEchauff(unEchauffement);
            });

            // Détails cachés
            const detailsItem = document.createElement('div');
            detailsItem.className = 'details d-none';
            detailsItem.style.backgroundColor = 'lightgrey';
            detailsItem.style.width = '100%';
            detailsItem.style.padding = '8px';
            detailsItem.textContent = `${unEchauffement.getDescription()}`;
    
    
            echauffementItem.appendChild(echauffementName);
            echauffementItem.appendChild(echauffementObjectif);
            echauffementItem.appendChild(echauffementExercice);
            echauffementItem.appendChild(echauffementDuree);
            echauffementItem.appendChild(echauffementNote);
            echauffementItem.appendChild(detailsItem);

            echauffementItem.appendChild(detailButton);
            echauffementItem.appendChild(removeButton);
    
            this.echaufflist.appendChild(echauffementItem);
        });
        

        

    }      

    cacher() {
        this._enregistre.style.display = "none";
    }
}

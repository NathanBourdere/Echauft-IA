// Réalisé par Lucas Danneaux
class QuestionnaireView {
    constructor() {

        this.conteneur = document.getElementById('app');
        this.conteneur.className = 'mb-4 text-center';

        this.texteQuestion = document.createElement('div');
        this.conteneur.appendChild(this.texteQuestion);

        this.optionsConteneur = document.createElement('div');
        this.conteneur.appendChild(this.optionsConteneur);

        this.resumeConteneur = document.createElement('div');
        this.resumeConteneur.style.display = 'none';
        this.conteneur.appendChild(this.resumeConteneur);

        this.boutonSuivant = document.createElement('button');
        this.boutonSuivant.textContent = 'Suivant';
        this.boutonSuivant.className = 'btn btn-primary w-100 mb-4';
        this.conteneur.appendChild(this.boutonSuivant);

        this.boutonValider = document.createElement('button');
        this.boutonValider.textContent = 'Valider';
        this.boutonValider.className = 'btn btn-primary w-100 mb-4';
        this.boutonValider.style.display = 'none';
        this.conteneur.appendChild(this.boutonValider);

        this.boutonRecommencer = document.createElement('button');
        this.boutonRecommencer.textContent = 'Recommencer';
        this.boutonRecommencer.className = 'btn btn-primary w-100 mb-4';
        this.boutonRecommencer.style.display = 'none';
        this.conteneur.appendChild(this.boutonRecommencer);
    }

    update(model) {
        if (model.termine()) {
            this.afficherResume(model.resume());
        } else {
            const questionActuel = model.getQuestionActuel();
            this.afficherQuestion(questionActuel.question, questionActuel.options);
        }
    }

    afficherQuestion(question, options) {
        this.resumeConteneur.style.display = 'none';
        this.texteQuestion.innerHTML = `<h3 class="mb-4">${question}</h3>`;
        this.optionsConteneur.innerHTML = '';
    
        options.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('card', 'p-3', 'mb-2', 'clickable-option');
            optionElement.textContent = option;
    
            optionElement.addEventListener('click', () => {
                Array.from(this.optionsConteneur.children).forEach(child => {
                    child.classList.remove('border-primary', 'text-primary');
                });
                optionElement.classList.add('border-primary', 'text-primary');
            });
    
            this.optionsConteneur.appendChild(optionElement);
        });
    
        this.boutonSuivant.style.display = 'block';
    }
    

    récupererReponse() {
        const selected = this.optionsConteneur.querySelector('.clickable-option.border-primary');
        return selected ? selected.textContent.trim() : null;    }

        afficherResume(summary) {
            this.texteQuestion.innerHTML = `<h3 class="mb-4">Résumé</h3>`;
            this.optionsConteneur.innerHTML = '';
            this.resumeConteneur.style.display = 'block';
        
            this.resumeConteneur.innerHTML = `
                <ul class="list-group mb-4">
                    ${summary
                        .map(entry => `
                            <li class="list-group-item">
                                <strong>${entry.question}</strong><br>
                                <span class="text-muted">Réponse : ${entry.reponse}</span>
                            </li>
                        `)
                        .join('')}
                </ul>
            `;
        
            this.boutonSuivant.style.display = 'none';
            this.boutonValider.style.display = 'block';
            this.boutonRecommencer.style.display = 'block';
        }
        
    boutonValidate(callback) {
        this.boutonValider.addEventListener('click', () => {
            callback();
        })
    }

    boutonValide(callback) {
        this.boutonSuivant.addEventListener('click', () => {
            const reponseChoisi = this.récupererReponse();
            if (reponseChoisi) {
                callback(reponseChoisi);
            } else {
                alert("Veuillez choisir une réponse dans la liste.");
            }
        });
    }

    boutonRestart(callback) {
        this.boutonRecommencer.addEventListener('click', () => {
            this.boutonValider.style.display = 'none';
            this.boutonRecommencer.style.display = 'none';
            callback();
        });
    }
}
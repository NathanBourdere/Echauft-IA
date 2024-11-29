class ViewNote {
    constructor() {
        this.searchBar = document.getElementById('searchInput');
        this.noteList = document.getElementById('note-list');
        this.noteGenerate = document.getElementById('noteGenerate');
        this.noteAdd = document.getElementById('noteAdd');
        this.notes = [];
    
        this.displayNotes();
    }

    showDetails(noteItem) {
        const detailsDiv = noteItem.querySelector('.details');
        detailsDiv.classList.toggle('d-none');
    }
    removeNote(elem) {
        this.notes = this.notes.filter(uneNote => uneNote !== elem);
        this.displayNotes();
    }


    displayNotes() {
        this.noteList.innerHTML = '';
        this.notes.forEach(note => {
            const noteItem = document.createElement('div');
            noteItem.className = 'd-flex flex-column align-items-start p-2 bg-white rounded shadow-sm mb-3';

            // Création de la première ligne avec image, titre, muscles
            const mainRow = document.createElement('div');
            mainRow.className = 'd-flex align-items-center w-100';

            const noteDetails = document.createElement('div');
            noteDetails.className = 'text-start';

            const noteName = document.createElement('p');
            noteName.className = 'fw-bold m-0';
            noteName.textContent = note.getTitle();

            const notePart = document.createElement('p');
            notePart.className = 'text-muted m-0';
            notePart.textContent =  note.getSmallDescription();

            const detailButton = document.createElement('button');
            detailButton.className = 'btn btn-dark btn-sm ms-auto';
            detailButton.textContent = 'Détails';
            detailButton.addEventListener('click', () => {
                this.showDetails(noteItem);
            });
            const removeButton = document.createElement('button');
            removeButton.className = 'btn btn-danger btn-sm ms-auto';
            removeButton.textContent = 'remove';
            removeButton.addEventListener('click', () => {
                this.removeNote(note);
            });

            // Détails cachés
            const detailsItem = document.createElement('div');
            detailsItem.className = 'details d-none';
            detailsItem.style.backgroundColor = 'lightgrey';
            detailsItem.style.width = '100%';
            detailsItem.style.padding = '8px';
            detailsItem.textContent = `${note.getDescription()}`;

            // Assemblage des éléments
            noteDetails.appendChild(noteName);
            noteDetails.appendChild(notePart);
            mainRow.appendChild(noteDetails);
            mainRow.appendChild(detailButton);
            mainRow.appendChild(removeButton);

            noteItem.appendChild(mainRow);
            noteItem.appendChild(detailsItem);

            this.noteList.appendChild(noteItem);
        });
    }
}

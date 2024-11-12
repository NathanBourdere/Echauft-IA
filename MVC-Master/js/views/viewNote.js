class ViewNote {
    constructor() {
        this.searchBar = document.getElementById('searchInput');
        this.noteList = document.getElementById('note-list');
        this.notes = [ {title: "Note 1", smallDescription: "Description 1" ,description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa suscipit sit eum tempore nihil commodi dolores! Nostrum, iusto veniam. Animi, iure? Laudantium sint harum fugiat aliquam, amet eos nisi?" }, {title: "Note 2", smallDescription: "Description 2" ,description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa suscipit sit eum tempore nihil commodi dolores! Nostrum, iusto veniam. Animi, iure? Laudantium sint harum fugiat aliquam, amet eos nisi?" }, {title: "Note 3", smallDescription: "Description 3" ,description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa suscipit sit eum tempore nihil commodi dolores! Nostrum, iusto veniam. Animi, iure? Laudantium sint harum fugiat aliquam, amet eos nisi?" }, {title: "Note 4", smallDescription: "Description 4" ,description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa suscipit sit eum tempore nihil commodi dolores! Nostrum, iusto veniam. Animi, iure? Laudantium sint harum fugiat aliquam, amet eos nisi?" }, {title: "Note 5", smallDescription: "Description 5" ,description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa suscipit sit eum tempore nihil commodi dolores! Nostrum, iusto veniam. Animi, iure? Laudantium sint harum fugiat aliquam, amet eos nisi?" } ];

        this.displayNotes();
    }

    showDetails(noteItem) {
        const detailsDiv = noteItem.querySelector('.details');
        detailsDiv.classList.toggle('d-none');
    }
    removeNote(noteItem) {
        noteItem.remove();
    }
    addNote() {
        let titleInput = prompt('Titre de la note');
        let smallDescriptionInput = prompt('Description courte');
        let descriptionInput = prompt('Description complète');

        this.notes.push({title: titleInput, smallDescription: smallDescriptionInput, description: descriptionInput});
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
            noteName.textContent = note.title;

            const notePart = document.createElement('p');
            notePart.className = 'text-muted m-0';
            notePart.textContent =  note.smallDescription;

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
                this.removeNote(noteItem);
            });

            // Détails cachés
            const detailsItem = document.createElement('div');
            detailsItem.className = 'details d-none';
            detailsItem.style.backgroundColor = 'lightgrey';
            detailsItem.style.width = '100%';
            detailsItem.style.padding = '8px';
            detailsItem.textContent = `${note.description}`;

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
        noteAdd.addEventListener('click', () => {
            this.addNote();
        });
    }
}

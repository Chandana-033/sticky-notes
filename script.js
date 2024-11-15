// Get reference to the sticky notes container
const stickyNotesContainer = document.getElementById('sticky-notes-container');

// Create a sticky note
function createStickyNote() {
    const newNote = document.createElement('div');
    newNote.classList.add('sticky-note');

    const noteHeader = document.createElement('div');
    noteHeader.classList.add('note-header');

    const noteTitle = document.createElement('span');
    noteTitle.classList.add('note-title');
    noteTitle.textContent = 'New Note';

    const saveButton = document.createElement('button');
    saveButton.classList.add('save-btn');
    saveButton.textContent = 'Save';

    const noteContent = document.createElement('textarea');
    noteContent.classList.add('note-content');
    noteContent.placeholder = 'Write your note here...';

    // Append the title, save button, and content to the note
    noteHeader.appendChild(noteTitle);
    noteHeader.appendChild(saveButton);
    newNote.appendChild(noteHeader);
    newNote.appendChild(noteContent);

    // Add the new note to the container
    stickyNotesContainer.appendChild(newNote);

    // Load saved content (if any)
    loadSavedContent(noteContent);

    // Add event listener for the save button
    saveButton.addEventListener('click', () => {
        saveContent(noteContent.value);
    });
}

// Save the content to localStorage
function saveContent(content) {
    // Save the content in localStorage with a unique key (could be index-based)
    const noteId = new Date().toISOString(); // Using timestamp as a unique ID
    localStorage.setItem(noteId, content);
    alert('Note saved!');
}

// Load saved content from localStorage into a specific note
function loadSavedContent(textarea) {
    // Try to find saved content based on a unique key (use localStorage keys)
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const savedContent = localStorage.getItem(key);
        if (!textarea.value && savedContent) {
            textarea.value = savedContent;
        }
    }
}

// Add event listener to the "Create Sticky Note" button
document.getElementById('create-note').addEventListener('click', createStickyNote);

import "./components/NoteForm.js";
import "./components/NoteList.js";
import "./components/NoteItem.js";
import { notesData } from "./notesData.js";

// Function to load notes from LocalStorage
function loadNotes() {
  const notes = JSON.parse(localStorage.getItem("notesData"));
  return notes ? notes : [];
}

// Function to save notes to LocalStorage
function saveNotes(notes) {
  localStorage.setItem("notesData", JSON.stringify(notes));
}

// Function to initialize notes
function initializeNotes() {
  const notes = loadNotes();
  if (notes.length === 0) {
    saveNotes(notesData);
    return notesData;
  }
  return notes;
}

// Function to add a new note
function addNoteToLocalStorage(newNote) {
  const notes = loadNotes();
  const updatedNotes = [...notes, newNote];
  saveNotes(updatedNotes);
  return updatedNotes;
}

document.addEventListener("DOMContentLoaded", () => {
  const noteListElement = document.querySelector("note-list");
  const noteFormElement = document.querySelector("note-form");

  // Initialize notes and render them
  const savedNotes = initializeNotes();
  noteListElement.notes = savedNotes;

  noteFormElement.addEventListener("noteAdded", (event) => {
    const newNote = event.detail;
    const updatedNotes = addNoteToLocalStorage(newNote);
    noteListElement.notes = updatedNotes;
  });
});

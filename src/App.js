import React, { useState } from "react";
import Header from "./Header"
import Sidebar from "./Sidebar"
import NoteView from "./NoteView"
import data from "./data/notes-data.js"

import './App.css';

function App() {
   const [notes, setNotes] = useState(data);
   const [active, setActive] = useState(notes[0]);

   const addNote = () => {

    const newId = notes.reduce((largestID, currentNote) => {
        return currentNote.id > largestID ? currentNote.id : largestID;
      }, null);

      console.log("New Id when creating a note: ", newId)
    const newNote = {
      title: "New Note",
      body: "",
      id: newId + 1,
    }

    setNotes ([...notes, newNote])

    setActive(newNote)

   }


   const deleteNote = (noteToDelete) => {
    setNotes(
      notes.filter((note) => note !== noteToDelete)
    )
    setActive(0)
   }
   
  const setActiveNote = (note) => {
    setActive(note)
  }

  const editNote = (noteId, name, value) => {
    const updatedNotes = notes.map((note) => {
      if (note.id !== noteId) return note
      return {
        ...note,
        [name]: value,
      }
    })
    setNotes(updatedNotes)
  }

  const findNoteIndex = (noteId) => {
    let noteIndex = 0;
    notes.find((note) => {
      noteIndex++;
      return note.id === noteId
    })

    return noteIndex
  }

  return (
      <div className="bg-dark-subtle">
        <Header />
        <div class="d-flex w-100">
            <Sidebar notes={ notes } addNote = { addNote } setActiveNote={ setActiveNote } active={ active }/>
            <NoteView note={ active } deleteNote={ deleteNote } editNote={editNote} findNoteIndex={findNoteIndex}/>
        </div>
      </div>
  )
}

export default App;

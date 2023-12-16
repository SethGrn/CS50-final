import React from "react"
import NotePreview from "./NotePreview"

function Sidebar ({ notes, addNote, active, setActiveNote }) {
    const noteList = notes.map((note) => {
        return <NotePreview note={ note } active={ active } setActiveNote={ setActiveNote }/>
    })

    return (
        <div class="bg-dark d-flex flex-column align-items-stretch flex-shrink-0" style={{width: 380, height: 800}}>
            <div href="/" class="d-flex align-items-center flex-shrink-0 p-3 text-decoration-none border-bottom justify-content-between">
                <h3 class="fw-semibold text-light">Note List</h3>
                <button className=" btn btn-success text-light" onClick={() => addNote()}>+ New Note</button>
            </div>
            <div class="list-group list-group-flush border-bottom scrollarea">
                { noteList }
            </div>
        </div>
    )
}

export default Sidebar
import React from "react"

function NoteView ({ note, active, setActiveNote }) {
    const { title, body } = note

    return (
        <button onClick={() => setActiveNote(note)} className={`btn ${note === active ? 'bg-primary' : 'bg-dark'}  list-group-item list-group-item-action active py-3 lh-sm" aria-current="true`}>
            <div class="d-flex w-100 align-items-center justify-content-between">
            <h5 class="mb-1">{ title }</h5>
            </div>
        </button>
    )
}

export default NoteView
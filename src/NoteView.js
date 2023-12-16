import { React, useState, useEffect } from "react"

function NoteView ({ note, deleteNote, editNote, findNoteIndex }) {

    const noteId = findNoteIndex(note.id)

    const initialFormData = {
        title: "",
        body: "",
    }
    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        setFormData(note)
    }, [note])

    function changeHandler(event) {
        const { name, value } = event.target;
      
        editNote(noteId, name, value)

        setFormData({
          ...formData,
          [name]: value,
        });
    }


    if(!note) return <h3 className="fw-semibold text-dark m-4">Please select a note</h3>;
    return (
        <div className="container py-5">
            <div className="d-flex justify-content-between input-group input-group-l">
                <input type="text" name="title" value={ formData.title } className="form-control fs-2" aria-describedby="inputGroup-sizing-lg" onChange={changeHandler}/>
                <button onClick={() => deleteNote(note)} className="btn btn-danger">Delete Note</button>
            </div>
            <hr/>
            <div class="form-floating">
                <textarea class="form-control" name="body" id="floatingTextarea2" value={ formData.body } style={{height: 610}} onChange={changeHandler}></textarea>
            </div>
        </div>
    )
}

export default NoteView
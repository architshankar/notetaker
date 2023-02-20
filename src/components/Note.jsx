import { useState } from "react";

function Note() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newNote = {
      id: Date.now(),
      text: inputText.trim()
    };

    if (!newNote.text) {
      return;
    }

    setNotes((prevNotes) => [...prevNotes, newNote]);
    setInputText("");
  }

  function handleDelete(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  return (
    <div className="note-container">
      <div className="note-wrapper">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter your note"
            className="note-input"
          />
          <button type="submit" className="note-button">
            Add Note
          </button>
        </form>

        <div className="paper-container">
          {notes.map((note) => (
            <div key={note.id} className="paper-note">
              <div className="note-text">{note.text}</div>
              <button
                onClick={() => handleDelete(note.id)}
                className="delete-button"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Note;

import React from "react";

const NoteList = ({ notes, onDelete, onArchive }) => (
  <div>
    {notes.map((note) => (
      <div key={note.id}>
        <h3>{note.title}</h3>
        <p>{note.body}</p>
        <button onClick={() => onDelete(note.id)}>Hapus</button>
        <button onClick={() => onArchive(note.id)}>Arsipkan</button>
      </div>
    ))}
  </div>
);

export default NoteList;

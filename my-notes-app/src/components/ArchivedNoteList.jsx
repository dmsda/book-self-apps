import React from "react";

const ArchivedNoteList = ({ archivedNotes, onUnarchive }) => (
  <div>
    <h2>Daftar Catatan Diarsipkan</h2>
    {archivedNotes.map((note) => (
      <div key={note.id}>
        <h3>{note.title}</h3>
        <p>{note.body}</p>
        <button onClick={() => onUnarchive(note.id)}>Kembalikan</button>
      </div>
    ))}
  </div>
);

export default ArchivedNoteList;

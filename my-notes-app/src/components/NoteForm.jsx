import React, { useState } from "react";

const MAX_TITLE_LENGTH = 50;

const NoteForm = ({ onAdd }) => {
  const [newNote, setNewNote] = useState({
    title: "",
    body: "",
    archived: false,
    createdAt: new Date().toISOString(),
  });
  const [remainingCharacters, setRemainingCharacters] =
    useState(MAX_TITLE_LENGTH);

  const handleAddNote = () => {
    const newNoteWithId = { ...newNote, id: +new Date() };
    onAdd(newNoteWithId);
    setNewNote({
      title: "",
      body: "",
      archived: false,
      createdAt: new Date().toISOString(),
    });
    setRemainingCharacters(MAX_TITLE_LENGTH);
  };

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    if (newTitle.length <= MAX_TITLE_LENGTH) {
      setNewNote({ ...newNote, title: newTitle });
      setRemainingCharacters(MAX_TITLE_LENGTH - newTitle.length);
    }
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Judul Catatan'
        value={newNote.title}
        onChange={handleTitleChange}
      />
      <p>
        Karakter tersisa: {remainingCharacters >= 0 ? remainingCharacters : 0}
      </p>
      <textarea
        placeholder='Isi Catatan'
        value={newNote.body}
        onChange={(e) => setNewNote({ ...newNote, body: e.target.value })}
      />
      <button onClick={handleAddNote}>Tambah Catatan</button>
    </div>
  );
};

export default NoteForm;

import React, { useState } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import NoteSearch from "./components/NoteSearch";
import ArchivedNoteList from "./components/ArchivedNoteList";
import { getInitialData } from "./utils";
import "./App.css";

const App = () => {
  const initialData = getInitialData();
  const [notes, setNotes] = useState(initialData);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const archiveNote = (id) => {
    const noteToArchive = notes.find((note) => note.id === id);
    if (noteToArchive) {
      setNotes(notes.filter((note) => note.id !== id));
      noteToArchive.archived = true;
      setArchivedNotes([...archivedNotes, noteToArchive]);
    }
  };

  const unarchiveNote = (id) => {
    const noteToUnarchive = archivedNotes.find((note) => note.id === id);
    if (noteToUnarchive) {
      setArchivedNotes(archivedNotes.filter((note) => note.id !== id));
      noteToUnarchive.archived = false;
      setNotes([...notes, noteToUnarchive]);
    }
  };

  const searchNotes = (searchTerm) => {
    const filtered = notes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredNotes(filtered);
  };

  return (
    <div className='container'>
      <h1>Aplikasi Catatan Pribadi</h1>
      <NoteForm onAdd={addNote} />
      <NoteSearch onSearch={searchNotes} />
      {archivedNotes.length > 0 && (
        <ArchivedNoteList
          archivedNotes={archivedNotes}
          onUnarchive={unarchiveNote}
        />
      )}
      {filteredNotes.length > 0 ? (
        <NoteList
          notes={filteredNotes}
          onDelete={deleteNote}
          onArchive={archiveNote}
        />
      ) : notes.length > 0 ? (
        <NoteList notes={notes} onDelete={deleteNote} onArchive={archiveNote} />
      ) : (
        <p>Tidak ada catatan.</p>
      )}
    </div>
  );
};

export default App;

import React, {useState, useEffect} from 'react';
import Header from "./components/Header";
import NewNote from "./components/NewNote";
import Note from "./components/Note";
import { auth, db } from './firebase';
import './App.css';

function App() {
  const [user, setUser] = useState();
  const [notes, setNotes] = useState([]);

  //update notes to db---------------------------------
  const updateNoteToDB = (noteId, title, description) => {
    if (!user) {
      alert("Please Log In with google to Save your notes.");
    } else {
      db.collection("users")
        .doc(user.uid)
        .collection("notes")
        .doc(noteId)
        .set({
          noteId: noteId,
          title: title,
          description: description,
        })
        .then(() => {
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    }
  };

  // Fetching notes from db---------------------------------------
  const fetchNotes = () => {
    db.collection("users")
      .doc(user?.uid)
      .collection("notes")
      .get()
      .then((querySnapshot) => {
        const newNotes = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          // data.basket = JSON.parse(data.basket);
          newNotes.push(data);
        });
        setNotes(newNotes);
        // console.log(notes);
      })
      .catch((error) => {
        alert("Error getting document:", error, "Please Refresh the page.");
      });
  };

  // Deleting notes from list --------------------------------------
  const delteNoteFromDB = (noteId) => {
    const newNotes = notes.filter(note => note.noteId !== noteId);
    setNotes(newNotes);
    if (!user) {
      alert("Please Log In with google to Save and Delete your notes.");
    } else {
      db.collection("users")
        .doc(user.uid)
        .collection("notes")
        .doc(noteId)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error Deleting document: ", error);
        });
    }
  }

// Handling user authentication---------------------------------------
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, [user]);

// Reloding notes when user changes ----------------------------------
  useEffect(() => {
    user ? fetchNotes() : setNotes([]);
  }, [user]);

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <div className="body">
        <NewNote setNotes={setNotes} updateNoteToDB={updateNoteToDB} />

        <div className="notes">
          {notes.map((note) => (
            <Note
              key={note.noteId}
              noteId={note.noteId}
              title={note.title}
              description={note.description}
              setNotes={setNotes}
              updateNoteToDB={updateNoteToDB}
              delteNoteFromDB={delteNoteFromDB}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

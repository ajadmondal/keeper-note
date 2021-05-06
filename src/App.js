import React, {useState, useEffect} from 'react';
import Header from "./components/Header";
import NewNote from "./components/NewNote";
import Note from "./components/Note";
import { auth, db } from './firebase';
import './App.css';

function App() {
  const [user, setUser] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
        
      }
    });
  }, [user]);
  useEffect(() => {
    user ? fetchNotes() : setNotes([]);
  }, [user]);

  //update notes to db---------------------------------
  const updateNoteToDB = (noteId, title, description) => {
    if (title === "") {
      alert("Note title cannot be empty.");
    } else if (description === "") {
      alert("Note description cannot be empty.");
    } else {
      const Note = {
        noteId: noteId,
        title: title,
        description: description,
      };
      if (!user) {
        alert("Please Log In with google to Save your notes.");
        setNotes([Note, ...notes]);
        setTitle("");
        setDescription("");
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
            // console.log("Document successfully updated!");

            setNotes([Note, ...notes]);
            setTitle("");
            setDescription("");
          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
      }
      
    }
  }
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
  }
  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <div className="body">
        <NewNote
          title={title}
          description={description}
          setTitle={setTitle}
          setDescription={setDescription}
          updateNoteToDB={updateNoteToDB}
        />

        <div className="notes">
          {notes.map((note) => (
            <Note
              noteId={note.noteId}
              title={note.title}
              description={note.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

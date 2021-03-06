import React, {useState, useEffect} from 'react';
import Header from "./components/Header";
import NewNote from "./components/NewNote";
import Note from "./components/Note";
import Notifier from "./components/Notifier";
import { auth, db } from './firebase';
import './App.css';

function App() {
  const [user, setUser] = useState();
  const [notes, setNotes] = useState([]);
  const [showNotifier, setShowNotifier] = useState(0);
  const [notifierComment, setNotifierComment] = useState("");

  //update notes to db---------------------------------
  const updateNoteToDB = (noteId, title, description) => {
    if (!user) {
      setNotifierComment("Please Sign In with Google to Save your notes.");
      setShowNotifier(()=> 0-1);
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
          setNotifierComment("Notes successfully Updated!");
          setShowNotifier((prev) => 1);
          
        })
        .catch((error) => {
          // The document probably doesn't exist.
          setNotifierComment(error.message);
          setShowNotifier((prev) => 0 - 1);
          
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
        setNotifierComment(error.message);
        setShowNotifier((prev) => 0 - 1);
      });
  };

  // Deleting notes from list --------------------------------------
  const delteNoteFromDB = (noteId) => {
    const newNotes = notes.filter(note => note.noteId !== noteId);
    setNotes(newNotes);
    if (!user) {
      setNotifierComment("Please Sign In with Google to Save your notes.");
      setShowNotifier((prev) => 0 - 1);
      // alert("Please Log In with google to Save and Delete your notes.");
    } else {
      db.collection("users")
        .doc(user.uid)
        .collection("notes")
        .doc(noteId)
        .delete()
        .then(() => {
          setNotifierComment("Note successfully Deleted!");
          setShowNotifier((prev) =>  1);
        })
        .catch((error) => {
          setNotifierComment(error.message);
          setShowNotifier((prev) => 0 - 1);
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
      {/* <button onClick={() => setShowNotifier((prev) => prev + 1)}>
        showNotifier
      </button> */}
      {showNotifier ? (
        <Notifier
          notifierComment={notifierComment}
          setNotifierComment={setNotifierComment}
          showNotifier={showNotifier}
          setShowNotifier={setShowNotifier}
        />
      ) : null}

      <Header
        user={user}
        setUser={setUser}
        setNotifierComment={setNotifierComment}
        setShowNotifier={setShowNotifier}
      />
      <div className="body">
        <NewNote
          setNotes={setNotes}
          updateNoteToDB={updateNoteToDB}
          setNotifierComment={setNotifierComment}
          setShowNotifier={setShowNotifier}
        />

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

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

  //update notes to db---------------------------------
  const updateNoteToDB = (noteId, title, description) => {
    if (title === "") {
      alert("Note title cannot be empty.");
    } else if (description === "") {
      alert("Note description cannot be empty.");
    } else {
      db.collection("users")
        .doc(user?.uid)
        .collection(noteId)
        .doc("note")
        .set({
          title: title,
          description: description,
        })
        .then(() => {
          console.log("Document successfully updated!");
          setTitle("");
          setDescription("");
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    }
    
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
          updateNoteToDB={updateNoteToDB} />

        <div className="notes">
          <Note
            title="what to do"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,"
          />
          <Note
            title="what to do"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,"
          />
          <Note
            title="what to do"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,"
          />
          <Note
            title="what to do"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,"
          />
          <Note
            title="what to do"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,"
          />
          <Note
            title="what to do"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,"
          />
          <Note
            title="what to do"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,"
          />
          <Note
            title="what to do"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,"
          />
          <Note
            title="what to do"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

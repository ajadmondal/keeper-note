import React, {useState, useEffect} from 'react';
import Header from "./components/Header";
import NewNote from "./components/NewNote";
import Note from "./components/Note";
import { auth, db } from './firebase';
import './App.css';

function App() {
  const [user, setUser] = useState();
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
  return (
    <div className="App">
      <Header
        user={user}
        setUser = {setUser}
      />
      <div className="body">
        <NewNote />

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

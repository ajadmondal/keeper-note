import React from 'react';
import Header from "./components/Header";
import NewNote from "./components/NewNote";
import Note from "./components/Note";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
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

import React, { useState } from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./Login";
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">

      {!user ? (
        <Login />
      ): (
        <div >
          <Router>
            <Routes>
              <Route path="/rooms/:roomId" element={<div className='app__body'><Sidebar /><Chat /></div>} />
              <Route path="/" element={<div className='app__body'><Sidebar /></div>} />
            </Routes>
          </Router>
        </div>
      )}
      
    </div>
  );
}

export default App;

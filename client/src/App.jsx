import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './components/Chat'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/react/chat" element={<Chat />} />
        </Routes>
      </Router>
      {/* <Chat /> */}
    </>
  )
}

export default App

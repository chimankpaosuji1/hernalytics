
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Landing from './pages/landing/Landing';
import PostElection from './pages/postElection/PostElection';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}/> 
        <Route path='postelection' element={<PostElection />} />      
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

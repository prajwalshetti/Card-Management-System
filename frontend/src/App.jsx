import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter,Route, Routes} from "react-router-dom"; 
import Create from './components/Create';
import Update from './components/Update';
import Show from './components/Show';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>

          <Route path='/' element={<Create/>}/>
          <Route path='/all' element={<Show/>}/>
          <Route path='/:id' element={<Update/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

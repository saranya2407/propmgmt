import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Navbar from './components/navbar';
import Home from './components/home';
import './App.css';
import Commercial from './components/Commercial';
import Residential from './components/Residential';
import AddProperty from './components/AddProperty';
import Login from './components/login';

function App() {
  const [commercials, setCommercials] = useState([]);
  const [residentials, setResidentials] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/commercialProperties')
        .then(response => response.json())
        .then(data => setCommercials(data));
}, []);

useEffect(() => {
    fetch('http://localhost:5000/residentialProperties')
        .then(response => response.json())
        .then(data => setResidentials(data));
}, []);


const addCommercialProperty = (property) => {
  fetch('http://localhost:5000/commercialProperties', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: commercials.length + 1, ...property }),
  })
      .then(response => response.json())
      .then(newProperty => setCommercials([...commercials, newProperty]));
};

const addResidentialProperty = (property) => {
  fetch('http://localhost:5000/residentialProperties', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: residentials.length + 1, ...property }),
  })
      .then(response => response.json())
      .then(newProperty => setResidentials([...residentials, newProperty]));
};

return (
  
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
              <Route path="/" exact element={<Home />} />

              <Route path="/Commercial" element={<Commercial properties={commercials} />} />
              <Route path="/Residential" element={<Residential properties={residentials} />} />
              <Route
                  path="/add-property"
                  element={
                      <AddProperty
                          onAddCommercial={addCommercialProperty}
                          onAddResidential={addResidentialProperty}
                      />
             
                  }
              />
                <Route path="/login" element={<Login />} />

          </Routes>
     
  </Router>
  </div>
);
}

export default App;





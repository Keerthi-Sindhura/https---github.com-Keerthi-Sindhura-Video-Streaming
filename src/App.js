import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/Header'
import Cards from './Components/Cards'

function App() {
  return(
    <Router>
      <Header />
      <Cards />
    </Router>
    
  )
  
}

export default App;

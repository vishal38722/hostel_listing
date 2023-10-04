import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [selectedCity, setSelectedCity] = useState("New York");
  const handleSelect = (currentCity) => {
    setSelectedCity(currentCity)
  }
  return (
    <div className="App">
      <Router>
        <Navbar onCitySelect={handleSelect}/>
        <Routes>
          <Route exact path='/' element={<Home selectedCity={selectedCity}/>} />
          <Route exact path='/about' element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

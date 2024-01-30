// Import necessary modules from react-router-dom
import { Route, Routes} from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login'; // Import the LoginPage component
import Signup from './Components/Signup';

function App() {
  return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
  );
}

export default App;
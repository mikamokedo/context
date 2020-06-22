import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ThemecontextProvider from './context/ThemeContext';
import ChangeToggle from './components/ChangeToggle';
import UseHook from './components/UseHook';

function App() {
  return (
    <div className="App">
      <ThemecontextProvider>
        <h1>concac</h1>
      <Navbar />
      <ChangeToggle />
      <UseHook />
      </ThemecontextProvider>
    </div>
  );
}

export default App;

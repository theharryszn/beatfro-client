import React, { useContext } from 'react';
import './App.css';
import { AuthContext } from './context/AuthContext';
import Routes from './Routes';

function App() {

  const { loading } = useContext(AuthContext);

  if (loading) {
    return <div></div>
  }

  
  return (
    <Routes/>
  );
}

export default App;

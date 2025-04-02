import React, { useState } from 'react';
import './App.css'
import Footer from './Footer';
import useOrientation from './useOrientation';


function App() {
  const isLandscape = useOrientation();

  return (
    <>
     
      <h1>coming</h1>
      <h2>soon</h2>
      <Footer />
    </>
  )
}

export default App

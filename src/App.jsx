import React, { useState } from 'react';
import './App.css'
import Footer from './Footer';
import useOrientation from './useOrientation';


function App() {
  const isLandscape = useOrientation();

  return (
    <>
     <div class="container">
      <h1>coming  soon </h1>
      <h2><a href="https://www.instagram.com/lamalafortuna/" target="_blank">In the meantime, feel free to explore my work on Instagram</a></h2>
      </div>
      <Footer />
    </>
  )
}

export default App

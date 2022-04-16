// eslint-disable 
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let pinktext = {color : '#FF6FA0', fontWeight : 'bold'};

  return (
    <div className="App">
      <main className='container'>
        <div className='main-text'>
          <h3>Metamorphosis And Humble</h3>
          <h1 style={pinktext}>Hee Yeon<br/><span className='akaName'>a.k.a HIKARU</span></h1>
          <div className='intro-text'>
            <p className='intro-border'>매일매일이 <span style={pinktext}>색다른 메타몽</span>처럼,<br/>하지만 항상 겸손한 마음가짐으로</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

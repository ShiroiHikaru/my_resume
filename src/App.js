// eslint-disable 


import React, { useState } from 'react';
import logo from './logo.svg';
import './normalize.css';
import './App.css';

// icon
import mainProfile from '../src/images/main_profile.png';
import profileIcon from '../src/images/profileicon.svg';
import github from '../src/images/github.svg';
import window from '../src/images/window.svg';
import grid from '../src/images/grid.svg'
import social from '../src/images/social.svg';
import youtube from '../src/images/youtube.svg';

function App() {
  let pinktextBold = {color : '#FF6FA0', fontFamily: 'GmarketSansBold'};
  let pinktextMedium = {color: '#FF6FA0', fontFamily: 'GmarketSansMedium'}
  return (
    <div className="App">
      <main className='container'>
        <section className='profile-wrap'>
            <div className='profile'>
                <div className='intro-wrap'>
                    <div className='intro-text'>
                        <h2 style={pinktextBold}>Metamorphosis<br/>And Humble</h2>
                        <h1 style={pinktextBold}>Hee Yeon<br/><span className='akaName'>a.k.a HIKARU</span></h1>
                        <div className='keypoint'>
                          매일매일이 <span className='keyword' style={pinktextBold}>색다른 메타몽</span> 처럼,
                          <br/>하지만 항상 겸손한 마음가짐으로
                        </div>
                        <br/>
                        <div className='introduce'>
                              가끔은 엉뚱하지만 색다르고 다양한 아이디어,<br/> 
                              하지만 겸손함과 끈기, 묵묵함을 베이스로 배움을<br/> 
                              게을리 하지 않고 꾸준하고 근면성실한 삶을 유지하며<br/>
                              성장하는 디자이너이자 신입개발자로 인사드립니다.
                        </div>
                    </div>
                    <img src={mainProfile}/>
                </div>
                <div className='categori'>
                    <ul>
                      <li><button style={pinktextBold}><img src={profileIcon} className='icon01'/>Profile</button></li>
                      <li><button style={pinktextBold}><img src={github} className='icon02'/>Publishing</button></li>
                      <li><button style={pinktextBold}><img src={window} className='icon03'/>Web / Landing</button></li>
                      <li><button style={pinktextBold}><img src={grid} className='icon04'/>Graphic</button></li>
                      <li><button style={pinktextBold}><img src={social} className='icon05'/>Social</button></li>
                      <li><button style={pinktextBold}><img src={youtube} className='icon06'/>Youtube</button></li>
                    </ul>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}

export default App;

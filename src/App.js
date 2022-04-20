// eslint-disable 
import React from 'react';
import './normalize.css';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";


// images
import mainProfile from '../src/images/main_profile.png';
import bodyshot from '../src/images/bodyshot.png';

// icon
import profileIcon from '../src/images/profileicon.svg';
import github from '../src/images/github.svg';
import window from '../src/images/window.svg';
import grid from '../src/images/grid.svg'
import social from '../src/images/social.svg';
import youtube from '../src/images/youtube.svg';

// status
import StatusBar from './status.js';

// testData area
const testData = [
  { bgcolor: "#FF6FA0", barcolor: 90}
]

const testData2 = [
  { bgcolor: "#FF6FA0", barcolor: 80}
]

const testData3 = [
  { bgcolor: "#FF6FA0", barcolor: 50}
]

const testData4 = [
  { bgcolor: "#FF6FA0", barcolor: 35}
]

const testData5 = [
  { bgcolor: "#FF6FA0", barcolor: 45}
]

const testData6 = [
  { bgcolor: "#FF6FA0", barcolor: 40}
]

const testData7 = [
  { bgcolor: "#FF6FA0", barcolor: 15}
]

function App() {
  let pinktextBold = {color : '#FF6FA0', fontFamily: 'GmarketSansBold'};
  let pinktextMedium = {color: '#FF6FA0', fontFamily: 'GmarketSansMedium'};
  let Blacktext = {color : '#000', fontFamily: 'GmarketSansMedium'};

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
                      <li>
                        <button style={pinktextBold}><img src={profileIcon} className='icon01'/>
                          Profile
                        </button>
                      </li>
                      <li><button style={pinktextBold}><img src={github} className='icon02'/>Publishing</button></li>
                      <li><button style={pinktextBold}><img src={window} className='icon03'/>Web / Landing</button></li>
                      <li><button style={pinktextBold}><img src={grid} className='icon04'/>Graphic</button></li>
                      <li><button style={pinktextBold}><img src={social} className='icon05'/>Social</button></li>
                      <li><button style={pinktextBold}><img src={youtube} className='icon06'/>Youtube</button></li>
                    </ul>
                </div>
            </div>
        </section>
        <section className='hello'>
            <div className='hello-wrap'>
              <img src={bodyshot}/>
                  <div className='hello-text'>
                      <h2 style = {Blacktext}>
                          Who is<br/>
                          <span style={pinktextBold}>Hee Yeon?</span>
                      </h2>
                      <div className='textbox'>
                        디자이너로써의 5년이라는 시간동안 얻은 실무경험과 배움,<br/><span style={Blacktext}>커리어를 쌓아올리면서 함께 성장한 책임감</span>으로
                        회피하지 않고<br/>어려움을 타파할 수 있는 힘을 키워왔습니다.
                        <br/><br/>
                        먼저 다가가는 자세로 원활하고 부드러운 커뮤니케이션을 이루고자 하며<br/> 
                        내 지식과 경험을 베풀고자 하는 마음가짐으로 업무와 일상생활을 지내왔습니다.
                        <br/><br/>
                        <span style={Blacktext}>“모르는건 죄가 아니지만 모르면서 아는 척은 죄이다.”</span> 롤모델인 친언니의 가르침으로<br/>
                        배움에 있어 부끄러워 하지 않고 항상 질문하며 
                        겸손하게 받아들이는 자세로<br/>한층 더 좋은 디자인과 개발자로서의 기능구현에 발돋움하고자 합니다.
                      </div>
                  </div>
            </div>
        </section>
        <section className='stack'>
            <div className='mystack'>
                  <table className='stackTable' border="1">
                      <caption>스펙테이블</caption>
                      <thead className='careea'>
                        <tr>
                          <th colSpan="2">Careea</th>
                        </tr>
                      </thead>
                      <tbody>
                          <tr>
                            <td rowSpan="2" className="tablecaption" style={pinktextBold}>Work</td>
                            <td>
                              2018. 04 - 2021. 05 : 광고대행사 카누크리에이션 대리
                            </td>
                          </tr>
                          <tr>
                              <td>2015. 04 - 2016. 12 : 광고대행사 팸컴퍼니 사원</td>
                          </tr>
                          <tr>
                            <td rowSpan="2" className="tablecaption" style={pinktextBold}>Education</td>
                            <td>
                                2013. 03 - 2015. 02 : 김포대학교 졸업
                            </td>
                          </tr>
                          <tr>
                            <td>
                              2010. 02 - 2013. 02 : 범박고등학교 졸업
                            </td>
                          </tr>
                          <tr>
                            <td rowSpan="2" className="tablecaption" style={pinktextBold}>Study</td>
                            <td>
                              2021. 07 - 2022. 01 : 그린컴퓨터  웹퍼블리셔&amp;프론트엔드 과정 수료
                            </td>
                          </tr>
                          <tr>
                            <td>
                              2017. 05 - 2017. 09 : 더조은컴퓨터 디지털 앱&amp;웹콘텐츠 수료
                            </td>
                          </tr>
                          <tr>
                            <td rowSpan="2" className="tablecaption" style={pinktextBold}>Certificate</td>
                            <td>
                              2022. 01 : GTQ 일러스트 1급 취득
                            </td>
                          </tr>
                          <tr>
                            <td>
                              2017. 10 : GTQ 포토샵 1급 취득
                            </td>
                          </tr>
                      </tbody>
                      <thead className='useSkills'>
                        <tr>
                          <th colSpan="2">Use Skills</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                              <td style={pinktextBold} className="skillTilte">PhotoShop</td>
                              <td>
                                <span className='statusBar'>
                                  {testData.map((item, idx) => (
                                    <StatusBar key={idx} bgcolor={item.bgcolor} barcolor={item.barcolor} />
                                  ))} 
                                </span>
                              </td>
                        </tr>
                      <tr>
                            <td style={pinktextBold} className="skillTilte">Illustrator</td>
                            <td>
                              <span className='statusBar'>
                                {testData2.map((item, idx) => (
                                  <StatusBar key={idx} bgcolor={item.bgcolor} barcolor={item.barcolor} />
                                ))} 
                              </span>
                            </td>
                      </tr>
                      <tr>
                            <td style={pinktextBold} className="skillTilte">Figma</td>
                            <td>
                              <span className='statusBar'>
                                {testData3.map((item, idx) => (
                                  <StatusBar key={idx} bgcolor={item.bgcolor} barcolor={item.barcolor} />
                                ))} 
                              </span>
                            </td>
                      </tr>
                      <tr>
                            <td style={pinktextBold} className="skillTilte">Indesign</td>
                            <td>
                              <span className='statusBar'>
                                {testData4.map((item, idx) => (
                                  <StatusBar key={idx} bgcolor={item.bgcolor} barcolor={item.barcolor} />
                                ))} 
                              </span>
                            </td>
                      </tr>
                      <tr>
                            <td style={pinktextBold} className="skillTilte">HTML</td>
                            <td>
                              <span className='statusBar'>
                                {testData5.map((item, idx) => (
                                  <StatusBar key={idx} bgcolor={item.bgcolor} barcolor={item.barcolor} />
                                ))} 
                              </span>
                            </td>
                      </tr>
                      <tr>
                            <td style={pinktextBold} className="skillTilte">CSS</td>
                            <td>
                              <span className='statusBar'>
                                {testData6.map((item, idx) => (
                                  <StatusBar key={idx} bgcolor={item.bgcolor} barcolor={item.barcolor} />
                                ))} 
                              </span>
                            </td>
                      </tr>
                      <tr>
                            <td style={pinktextBold} className="skillTilte">Javascript</td>
                            <td>
                              <span className='statusBar'>
                                {testData7.map((item, idx) => (
                                  <StatusBar key={idx} bgcolor={item.bgcolor} barcolor={item.barcolor} />
                                ))} 
                              </span>
                            </td>
                      </tr>
                      </tbody>
                  </table>
            </div>
        </section>
        <section className='Publishing'>
          <div className='Pub_wrap'>
            <h2>Publishing Page</h2>
                <div className='Pub_box'>
                  <div className='Pub_box_one'>
                  
                     
                        <img src = {require('./images/emart.jpg')}/>
              
                  </div>
                </div>
          </div>
        </section>
      </main>
    </div>
  );
 
}



export default App;

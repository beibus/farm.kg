import React from 'react';
import { useState, useEffect } from 'react';

import logo from './components/img/logo.svg';
import language from './components/img/language.svg';

function App() {
  const [text, setText] = useState([]);

    useEffect(() => {
      fetch('https://raw.githubusercontent.com/ChilikinAM/farm.kg-front/dev/src/components/data/main_en.json')
        .then(res => res.json())
        .then(data => setText(data))
    }, []);

  return (
    <>
    <header>
        <div className='logo'><a href='/'><img src={logo} alt="{text.mainHeader}"></img></a></div>
        <div className='mainMenu'>
                <a href='/#about'>{text.menuAbout}</a>
                <a href='/#companies'>{text.menuCompanies}</a>
                <a href='/#contacts'>{text.menuContacts}</a>
        </div>
        <div className='search'>
            <input></input>
        </div>
        <div className='language'>
            <img src={language} alt=''></img>
        </div>
    </header>
    <main>
{/* Блок первый */}
      <div id='first' className='content'>
        <div className="arnamentLeft"></div>
        <div className="arnamentRight"></div>
        <div className="homepageMain">
            <div className='mainContent'>
                <div className='slogan'><h1>{text.mainHeader}</h1>
                <h3>{text.mainSlogan}</h3>
                </div>
                <div className='mainBrandsPhoto'>
                    <div className='mainBrand1'></div>
                    <div className='mainBrand2'></div>
                    <div className='mainBrand3'></div>
                    <div className='mainBrand4'></div>
                </div>
            </div>    
        </div>
      </div>
{/*  Конец первого блока */}
{/*  Блок о нас  */}
      <div id='about' className='content'>
        <div className="arnamentRight"></div>
        <div className="aboutMain">
            <div className="aboutLeft">
                <h1>{text.aboutOurMission}</h1>
                <h3>{text.aboutText}</h3>
            </div>
            <div className="aboutRight">
                <div className='aboutImg1'></div>
                <div className='aboutImg2'></div>               
            </div>
        </div>
      </div>
{/*  Конец блока о нас  */}
{/*  Блок компании  */}
      <div id='companies' className='content'>
          <div className='companies'>
            <div className='companiesNav'></div>
            <div className='companiesRotate'>
              <div className='companieName'></div>
              <div className='companieLogo'></div>
              <div className='companieMore'></div>
            </div>
          </div>
      </div>
{/*  Конец блока компании  */}
{/*  Блок Контакты  */}
        <div id='contacts' className='content'>
          <div className="contactsMain">
            <div className="contactsContent">
                <div className='leftColumn'>
                    <div className='contactHeader'><p>{text.contactContactUs}</p></div>
                    <div className='callUs'>
                        <h3>{text.contactCallUs}</h3>
                        <h1>{text.contactPhone}</h1>
                    </div>
                    <div className='contactIcon'>
                        <div className='contactLineItems'>
                            <div className='mailIcon'></div>
                            <h3>{text.contactMain}</h3>
                        </div>
                        <div className='contactLineItems'>
                            <div className='addressIcon'></div>
                            <h3>{text.contactAddress}</h3>
                        </div>
                    </div>
                </div>
                <div className='rightColumn'>
                    <div className='contactMap'></div>
                </div>
            </div>
        </div>
      </div>

{/*  Конец блока контакты  */}
    </main>
  </>
  );
}

export default App;

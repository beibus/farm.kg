import React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import logo from './components/img/logo.svg';
import languageBtn from './components/img/language.svg';
import { Companies } from './components/companies';
import { Pagination } from './components/pagination';
import useLocalStorage from './components/hooks/use-localstorage';
import i18n from './i18n';
//import { Modal } from './components/modal.jsx';

function App() {
  const {t} = useTranslation();
  const [language, setLanguage] = useLocalStorage('language', 'ru');
  const handleLanguageChange = () => {
    if (language === 'en'){
      i18n.changeLanguage('ru');
      setLanguage('ru')
    }
    if (language === 'ru'){
      i18n.changeLanguage('en');
      setLanguage('en')
    }
  }

// Старый файл текст
/*  const [text, setText] = useState([]);

    useEffect(() => {
      fetch('https://raw.githubusercontent.com/ChilikinAM/farm.kg-Landing/main/src/components/data/main_en.json')
        .then(res => res.json())
        .then(data => setText(data))
    }, []);*/

  // AbuotUS Data
  const [textAboutUs, setTextAboutUs] = useState([]);
  useEffect(() => {
    const getAboutUs = async () => {
      const res = await fetch('https://farm-kg.herokuapp.com/about_us/', {method: "GET"})
      .then(res => res.json())
      .then(data => setTextAboutUs(data[0]))
    }
    getAboutUs()
  }, [])

  //Pagination Companies

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [companiesPerPage] = useState(6);

  useEffect( () => {
    const getCompanies = async () => {
      setLoading(true);
      const res = await fetch('https://farm-kg.herokuapp.com/company/', {method: "GET"})
      .then(res => res.json())
      .then(data => setCompanies(data));
      setLoading(false)
    }

    getCompanies()
  }, [])

  const lastCompanieIndex = currentPage * companiesPerPage;
  const fistCompaniesIndex = lastCompanieIndex - companiesPerPage;
  const currentCompanies = companies.slice(fistCompaniesIndex, lastCompanieIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage( prev => prev + 1);
  const backPage = () => setCurrentPage( prev => prev - 1);

  // Contact Data
  const [textContact, setTextContact] = useState([]);
  useEffect(() => {
    const getContact = async () => {
      const res = await fetch('https://farm-kg.herokuapp.com/contacts/', {method: "GET"})
      .then(res => res.json())
      .then(data => setTextContact(data[0]))
    }
    getContact()
  }, [])


  //Модалка - Пока не нужна

  /*const [modalActive, setModalActive] = useState(false);
  const [companieID, setCompanieID] = useState('');
  const openModalId = (id) => {
    setModalActive(true);
    setCompanieID(id);
  }*/

  return (
    <>
    <header>
        <div className='logo'><a href='/'><img src={logo} alt="{text.mainHeader}"></img></a></div>
        <div className='mainMenu'>
                <a href='/#about'>{t('menuAbout')}</a>
                <a href='/#companies'>{t('menuCompanies')}</a>
                <a href='/#contacts'>{t('menuContacts')}</a>
        </div>
        <div className='search'>
            <input></input>
        </div>
        <div className='language' onClick={handleLanguageChange}>
            <img src={languageBtn} alt='Сменить язык' onClick={handleLanguageChange}></img>
        </div>
    </header>
    <main>
{/* Блок первый */}
      <div id='first' className='content'>
        <div className="arnamentLeft"></div>
        <div className="arnamentRight"></div>
        <div className="homepageMain">
            <div className='mainContent'>
                <div className='slogan'><h1>{t('mainHeader')}</h1>
                <h3>{t('mainSlogan')}</h3>
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
                <h1>{language === 'ru' ? textAboutUs.name_ru : textAboutUs.name_en}</h1>
                <h3>{language === 'ru' ? textAboutUs.text_ru : textAboutUs.text_en}</h3>
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
            <div className='companiesNav'>
              <div className="btnBack" onClick={backPage}></div>
              <Pagination 
              companiesPerPage={companiesPerPage}
              totalCompanies={companies.length}
              paginate={paginate}
            />
              <div className="btmNext" onClick={nextPage}></div> 
            </div>
{/*              {companies.map(post => { return (
                  <div id={post.id} className='companie'><h1>{post.name}</h1>
                  <img src={post.logoMainPage} alt={post.name}></img>
                  <div className='morebutton'><h3>{text.companiesMore}</h3></div></div>
              )})}
*/}
                <Companies companies={currentCompanies} loading={loading} t={t} />
          </div>
      </div>
{/* Модалка Компании */}{/*}
      <Modal active={modalActive} setActive={setModalActive} id={companieID}>
                <div className='singlCompanie'>
                  <div className='left'>
                    <h1>Supara</h1>
                    <h3>Products "Supara talkan" from natural organic products in Belgian chocolate.
Supara talkan chocolates made from barley oatmeal, ghee, honey and local organic walnuts, prunes and pistachios are covered with high quality Belgian chocolate. Contains no sugar, colors, flavors or preservatives.</h3>
                  </div>
                  <div className='right'>
                    <div className='logo'></div>
                    <div className='url'><p>Supara</p></div>
                  </div>
                </div>
                <div className='companieSlided'></div>
      </Modal>*/}
{/* Конец модалки Компании */}
{/*  Конец блока компании  */}
{/*  Блок Контакты  */}
        <div id='contacts' className='content'>
          <div className="contactsMain">
            <div className="contactsContent">
                <div className='leftColumn'>
                    <div className='contactHeader'><p>{t('contactContactUs')}</p></div>
                    <div className='callUs'>
                        <h3>{t('contactCallUs')}</h3>
                        <h1>{textContact.phone_number}</h1>
                    </div>
                    <div className='contactIcon'>
                        <div className='contactLineItems'>
                            <div className='mailIcon'></div>
                            <h3>{textContact.email}</h3>
                        </div>
                        <div className='contactLineItems'>
                            <div className='addressIcon'></div>
                            <h3>{language === 'ru' ? textContact.address : textContact.address}</h3>
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

import React from "react";

const Companies = ({ companies, loading, t, language }) => {

    if (loading) {
        return <h2>Loading</h2>
    }

    return (
        <div className='companieRotate'>
             {companies.map(companie => { return (
                  <div id={companie.id} className='companie' key={companie.id}><h1>{language === 'ru' ? companie.name_ru : companie.name_en}</h1>
                  <img src={companie.photo} alt={language === 'ru' ? companie.name_ru : companie.name_en}></img>
                  <div className='morebutton'><h3>{t('companiesMore')}</h3></div></div>
                  )})}
        </div>
    )
}

export {Companies};
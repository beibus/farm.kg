import React from "react";

const Companies = ({ companies, loading, text }) => {

    if (loading) {
        return <h2>Loading</h2>
    }

    return (
        <div className='companieRotate'>
             {companies.map(companie => { return (
                  <div id={companie.id} className='companie' key={companie.id}><h1>{companie.name}</h1>
                  <img src={companie.logoMainPage} alt={companie.name}></img>
                  <div className='morebutton'><h3>{text.companiesMore}</h3></div></div>
                  )})}
        </div>
    )
}

export {Companies};
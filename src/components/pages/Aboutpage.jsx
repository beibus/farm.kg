import './Aboutpage.css';

const About = ({ text }) => {
    return (
        <>
        <div className="arnament"></div>
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
        </>
    )
}

export {About}
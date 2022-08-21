import './Homepage.css';
import { Homepage } from './Homepage';
import { About } from './Aboutpage';
import { Companies } from './Companies';
import { Contacts } from './Contacts';


const MainLandingPage = ({ text }) => {

    return (
        <>
        <div className='componentPage' id='homepage'><Homepage text={text} /></div>
        <div className='componentPage' id='aboutpage'><About text={text} /></div>
        <div className='componentPage' id='companies'><Companies text={text} /></div>
        <div className='componentPage' id='contacts'><Contacts text={text} /></div>
        </>
    )
}

export {MainLandingPage}
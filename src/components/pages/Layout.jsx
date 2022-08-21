import { Link, Outlet } from 'react-router-dom';
import logo from '../components/img/logo.svg';

const Layout = ({ text }) => {
    return (
      <>
        <header>
            <div className='logo'><Link to='/:id'><img src={logo}></img></Link></div>
            <div className='mainMenu'>
                    <a href='/MainLandingPage#aboutpage'>{text.menuAbout}</a>
                    <Link to='/companies'>{text.menuCompanies}</Link>
                    <Link to='/#contacts'>{text.menuContacts}</Link>
            </div>
        </header>
        <main>
        <Outlet />
        </main>
      </>
    )
}

export {Layout}
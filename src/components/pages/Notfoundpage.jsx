import { Link } from 'react-router-dom';

const Notfoundpage = ({ text }) => {
    return (
        <div>
            <h1>Not found page</h1>
            <p>Please visit <Link to="/">Homepage {text.mainHeader}</Link>!</p>
        </div>
    )
}

export {Notfoundpage}
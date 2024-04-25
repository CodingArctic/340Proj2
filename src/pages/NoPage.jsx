import '../App.css';
import NavMenu from '../components/NavMenu';

// simple 404 error page
const NoPage = () => {
    return (
        <>
        <NavMenu />
            <div className='NoPage'>
                <h2>404: Page Not Found</h2>
                <a href='/'>Return to Home</a>
            </div>
        </>
    )
}

export default NoPage;
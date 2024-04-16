import '../App.css';
import NavMenu from '../components/NavMenu';

// simple 404 error page
const NoPage = () => {
    return (
        <>
            <div className='sticky'>
                <h1>Welcome to the iSchool!</h1>
                <NavMenu activeItem="people" />
            </div>
            <div className='NoPage'>
                <h2>404: Page Not Found</h2>
                <a href='/'>Return to Home</a>
            </div>
        </>
    )
}

export default NoPage;
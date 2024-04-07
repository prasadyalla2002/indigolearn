import {HashLink as Link} from 'react-router-hash-link'
import './styles.css'

const Navbar = () =>{
    return(
        <nav className="main-nav">
            <Link to="#" className='links' smooth>
                <h1 className='main-logo'>IndigoLearn</h1>
            </Link>
            
            <ul className="nav-list">
                <li className='navbar-list-item'>
                    <Link to="#whychooseus" className='links' smooth>
                        <p className='nav-links'>Why Choose Us</p>
                    </Link>
                </li>
                <li className='navbar-list-item'>
                    <Link to="#whatyoulearn" className='links' smooth>
                        <p className='nav-links'>What You Learn</p>
                    </Link>
                </li>
                <li className='navbar-list-item'>
                    <Link to="#placements" className='links' smooth>
                        <p className='nav-links'>Placements</p>
                    </Link>
                </li>
                <li className='navbar-list-item'>
                    <Link to="#contactus" className='links' smooth>
                        <p className='nav-links'>Contact Us</p>
                    </Link>
                </li>
            </ul>
            <button className='login-button'>
                LogIn/SignUp
            </button>
        </nav>
    )
}

export default Navbar
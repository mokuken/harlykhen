import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import profile from '../assets/images/profile.png';

function Home() {
    return (
        <div className='home-container'>
            <div className="profile">
                <img src={profile} alt="Profile" />
            </div>
            <div className="socials">
                <div className="icons">
                    <a href="#"><FontAwesomeIcon icon={faSquareFacebook} /></a>
                    <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="#"><FontAwesomeIcon icon={faSquareGithub} /></a>
                </div>
            </div>
            <div className="hero">
                <h1>Hello there I'm Harly Khen!</h1>
                <div className="profession">
                    <hr/><h3>Full Stack Developer</h3><hr/>
                </div>
                <p>
                    I'm a Computer Science Student in the Philippines, and<br/>
                    I'm very passionate and dedicated to my work.
                </p>
                <div className='extras'>
                    <button className="contactBtn">Contact Info</button>
                    <button className="downloadCVBtn">Download CV</button>
                </div>
            </div>
        </div>
    )
}

export default Home

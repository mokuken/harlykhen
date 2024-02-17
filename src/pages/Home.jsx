import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div className='home-container'>
        <div className="hero">
            <h1>Hello There I'm Harly Khen</h1>
            <div className="profession">
                <hr/>
                <h3>Full Stack Developer</h3>
            </div>
            <p>I'm a Computer Science Student in the Philippines, and I'm very passionate and dedicated to my work.</p>
            <button className="button">Contact Info</button>
            <button className="button">Download CV</button>
        </div>
        <div className="social">
            <div className="icons">
                <a href="#"><FontAwesomeIcon icon={faSquareFacebook} /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="#"><FontAwesomeIcon icon={faSquareGithub} /></a>
            </div>
        </div>
    </div>
  )
}

export default Home

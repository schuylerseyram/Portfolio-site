import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s1.png'
import LogoSubtitle from '../../assets/images/sub.png'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope, faFile, faHome ,faUser} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to ='/'>
            <img src={LogoS}  object-fit: cover alt="logo"/>
            <img className = 'sub-logo'  object-fit: cover src={LogoSubtitle} alt="logo"/>

        </Link>
        <nav>
            <NavLink end className="active" to= "/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink end className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink end  className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <NavLink end  className="resume-link" to="/resume">
                <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
            </NavLink>
            <NavLink   className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
            </NavLink>

            

            

        </nav>
        <ul>
            <li>
                <a target='_blank'
                rel='noreferrer'
                href="https://www.linkedin.com/in/schuyler-seyram/">
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>


            </li>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/schuylerseyram">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>

            </li>
            <li>
                <a target='_blank'
                rel='noreferrer'
                href="https://www.linkedin.com/in/schuyler-seyram/">
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>


            </li>
        </ul>
    </div>
)

export default Sidebar
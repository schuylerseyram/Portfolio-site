import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s1.png';
import Logo from './Logo'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
const Home = () => {
    const [letterClass, ] = useState('text-animate')
    const nameArray=[' ','S','c','h','u','y','l','e','r']
    const jobArray = ['E','l','e','c','t','r','i','c','a','l',' ','a','n','d',' ',' ','C','o','m','p','u','t','e','r',' ','E','n','g','i','n','e','e','r']
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>

                {/* <img src={LogoTitle} alt='developer' /> */}
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2>FPGA Enthusiast, Interested in Computer Architecture</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
            
        </div>
        <Loader type='pacman' active/>
        </>
    );
}

export default Home
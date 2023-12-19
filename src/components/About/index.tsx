import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt,  faJsSquare, faLinux, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faC } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(()=> {
         setTimeout(()=> {
            setLetterClass('text-animate-hover')
    },3000)
    },[])
    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
            <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t', ' ', 'M','e']}
                        idx={15}
                        />

                </h1>
                <p>
                    I'm currently a final year student in Cornell University Studying Electrical and Computer Engineering. My focus is on Computer Engineering. 
                </p>
                <p>
                I like to engage in research and projects and i love the field of Computer Architecture.
                </p>
                    
                
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faPython} color ="#040273"/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faLinux} color ="#000000"/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faC} color ="#28A4D9"/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color ="#5ED4F4"/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color ="#EFD81D"/>
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color ="#EC4328"/>
                        </div>
                    </div>
            </div>
        </div>
        <Loader  type="ball-beat" active/> 
        </>
    )
}

export default About
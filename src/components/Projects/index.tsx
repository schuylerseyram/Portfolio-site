import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faLinux, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
// import { faC } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';
import { NavLink } from 'react-router-dom';


const Projects =() => {
    const [letterClass, setLetterClass] = useState('text-animate')
    

    useEffect(()=> {
        setTimeout(()=> {
            setLetterClass('text-animate-hover')
    },3000)
    },[])

    return(
        <>
        <div className='container projects-page'>
            <div className='text-zone'>
                <div className='proj1-zone'>

                <h1>
                    <NavLink end className="active" to="/Proj1">

                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['V','o','i','c','e', ' ', 'M','a','n','i','p','u','l','a','t','o','r']}
                            idx={15}
                            />
                    </NavLink>
                    

                    </h1>
                    <p>
                        Together with my partner , we designed and implemented  a voice manipulator. Using a Raspberry Pi Pico and a microphone, we were table to take user voice input, filter it, and then overlay it with carrier waves of different frequencies to make it sound electronic. 
                    </p>
                    <p>
                    Written in C
                    </p>
                        

                    </div>

                    <div className='proj2-zone'>
                <h1>
                    <NavLink end  className='active' to='/Proj2'>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['T','a','n','k', ' ', 'W','a','r','s']}
                            idx={15}
                            />
                    </NavLink>
                    </h1>
                    <p>
                     Using Python and  modules such as pygame and tkinter, my partner and i designed our own version of the tank wars game on a Raspberry Pi,  replacing keyboard control with an arcade style joystick and button connected through GPIOs(General-Purpose Input and Output Pins)
                    </p>
                    <p>
                    Written in Python
                    </p>
                    </div>
                    <div className='proj3-zone'>
                        <h1>
                            <NavLink end className="active" to="/Proj3">
                                <AnimatedLetters 
                                    letterClass={letterClass}
                                    strArray={['S','e','l','f','-', 'N', 'a','v','i','g','a','t','i','n','g',' ','R','o','b','o','t']}
                                    idx={15}
                                    />
                            </NavLink>
                            </h1>
                            <p>
                                Built a robot with an "Arduino Nano Every" core and implemented maze navigation properties based on the Depth First Search Algorithm, in an attempt to create an autonomous robot that could navigate through mazes.
                            </p>
                            <p>
                            Firmware written in C++
                            </p>
                                
                            

                    </div>
            


                </div>
                
                    
        
        </div>
        <Loader type='pacman' active/> 
        </>
    )
}
        


export default Projects
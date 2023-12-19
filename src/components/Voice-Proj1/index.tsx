import "./index.scss";
import Pdf from "./_Schuyler Seyram-2023.pdf";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import { useEffect, useState} from "react";
import AnimatedLetters from "../AnimatedLetters";
import Pic from './image9.jpg';
import Vid from "./demonstration.mp4"
import ReactPlayer from "react-player";

const Proj1=()=> {

    const [letterClass, setLetterClass] = useState('text-animate')
    

    useEffect(()=> {
        setTimeout(()=> {
            setLetterClass('text-animate-hover')
    },3000)
    },[])

    return(
        <>
        <div className="container proj1-page">
        <div className="text-zone">
        <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['V','o','i','c','e', ' ', 'M','a','n','i','p','u','l','a','t','o','r']}
                            idx={15}
                            />

                    </h1>
                    <p>
                        Ever wanted to disgusise your voice or make it sound cool and robot-like? Well I did too! Using the Raspberry Pi Pico, I made a vocoder / voice manipulator. 
                    </p>
                    <div className="pic"> 
                    <img   src={Pic}  object-fit: cover alt="setup" width="400" height="400"/>   
                    </div>
                    <p>
                     The Raspberry Pi Pico is  microcontroller and at the center of this creation. It powers all the other devices and also serves as the brain. The tiny little microphone on top of the lego setup takes input, ie the human voice and send it to the Pico, which then breaks the voice up into different frequency ranges and applies a  sound wave type of particula frequencies to each of the ranges of the voice that we split. It then output the data to a Digital to Analog Converter which then sends the info to an audio jack then to the speaker where we then hear sound output.
                    </p>

                    <div className="video">
                        <video src={Vid} width="400" height="400"  controls></video>

                    </div>
                        

                    

            
        </div>

        
        
        </div>
        <Loader type='ball-pulse-sync' active/>
        </>
    )
}

export default Proj1
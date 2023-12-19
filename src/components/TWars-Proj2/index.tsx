import "./index.scss";
import Pdf from "./_Schuyler Seyram-2023.pdf";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import { useEffect, useState} from "react";
import AnimatedLetters from "../AnimatedLetters";
import Pic from './joystick.jpg';
import Vid from "./twars-final.mp4";
import ReactPlayer from "react-player";

const Proj2=()=> {

    const [letterClass, setLetterClass] = useState('text-animate')
    

    useEffect(()=> {
        setTimeout(()=> {
            setLetterClass('text-animate-hover')
    },3000)
    },[])

    return(
        <>
        <div className="container proj2-page">
        <div className="text-zone">
        <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['T','a','n','k', ' ', 'W','a','r','s']}
                            idx={15}
                            />

                    </h1>
                    <p>
                        Having played this nolstagic game I together with a partner decided to remake the game with a Raspberry Pi 4 to show how applicable the Pi is in the field of embedded systems. Using the Raspberry Pi's inputs and outputs we attached a joystick and big buttons to play the game(to create an acrade feel). We created 3 different levels, each with its own set of nuances. Powerups were also added.  
                    </p>
                    <div className="pic"> 
                    <img   src={Pic}  object-fit: cover alt="setup" width="400" height="400"/>   
                    </div>
                    <p>
                        To make the system as automated as possible we also attempted automated opening of the game as soon as the Pi computer booted up.
                    </p>
                    <div>
                    <video src={Vid} width="400" height="400"  controls></video>
                    </div>
{/* 
                    <div className="video">
                        <video src={Vid} width="400" height="400"  controls></video>

                    </div> */}
                        

                    

            
        </div>

        
        
        </div>
        <Loader type='ball-pulse-sync' active/>
        </>
    )
}

export default Proj2
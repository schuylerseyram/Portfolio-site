import "./index.scss";
import Pdf from "./_Schuyler Seyram-2023.pdf";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import { useEffect, useState} from "react";
import AnimatedLetters from "../AnimatedLetters";
// import Pic from ;
import Vid from "./video.mp4";
import ReactPlayer from "react-player";

const Proj3=()=> {

    const [letterClass, setLetterClass] = useState('text-animate')
    

    useEffect(()=> {
        setTimeout(()=> {
            setLetterClass('text-animate-hover')
    },3000)
    },[])

    return(
        <>
        <div className="container proj3-page">
        <div className="text-zone">
        <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['S','e','l','f', '-', 'N','a','v','i','g','a','t','i','n','g',' ','R','o','b','o','t']}
                            idx={15}
                            />

                    </h1>
                    <p>
                        This was a class-based project which required the use of the Arduino Nano Every to design a self-navigating robot using devices such as distance sensors and radio transmitters. Using algorithms such as "Depth First Search", we attempted to succesfully navigate any maze of any configuration.
                        
                         
                    </p>
                    <div>
                    <video src={Vid} width="400" height="400"  controls></video>
                    </div>
                    <p>
                        In addition, the robot had a radio transceiver to pick up various tokens(radio transmissions of different frequencies found in the maze.)
                    </p>

                        

                    

            
        </div>

        
        
        </div>
        <Loader type='ball-pulse-sync' active/>
        </>
    )
}

export default Proj3
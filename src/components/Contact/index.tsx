import "./index.scss"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import { useState, useEffect, useRef } from "react"
import emailjs from "@emailjs/browser"
// import { MapContainer, Marker, TileLayer , Popup} from "react-leaflet"
import Pic from './pic.jpg'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm= useRef<HTMLFormElement>(null);
    

    useEffect(()=> {
         setTimeout(()=> {
            setLetterClass('text-animate-hover')
    },4000)
    },[])

    const sendEmail=(e)=> {
        e.preventDefault()

        emailjs
            .sendForm(
                'Portfolio',
                'template_9qthmmk',
                // @ts-ignore
                 refForm.current,
                'DGr9k2Ucjx10ZXcHB'


            )
            .then(
                ()=>{
                    alert('Message successfully sent!')
                    window.location.reload()
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }
    return(
        <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o' ,'n','t','a','c','t', ' ','M','e']}  idx={15} />
                   
                </h1>
                <p>
                    Send me and email and let's talk!!
                </p>
                <div className="contact-form">
                       
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li className="half">
                                <input type="text" name="subject" placeholder="Subject" required />
                            </li>
                            <li>
                            <textarea placeholder="Message" name="message" required>
                            </textarea>
                            </li>
                            <li>
                                <input type="submit" value="SEND" className="flat-button">

                                </input>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="info-map">
                Schuyler Seyram,
                <br/>
                USA,
                <br/>
                Ithaca, NY
                <br/>
                <span>elikplimseyram@gmail.com</span>

                

            </div>
            <div className="map-wrap">
            <img src={Pic}  object-fit: cover alt="pic"/>    

            </div>

        </div>
        <Loader type="pacman" />

        </>
    )
}

export default Contact


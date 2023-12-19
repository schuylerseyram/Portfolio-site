import "./index.scss";
import Pdf from "./_Schuyler Seyram-2023.pdf";
import { Link } from "react-router-dom";
import Loader from "react-loaders";

const Resume=()=> {
    return(
        <>
        <div className="resume-view">
            <Link to={Pdf} className='flat-button'>View Resume</Link>
        </div>
        <Loader type='ball-pulse-sync' active/>
        </>
    )
}

export default Resume
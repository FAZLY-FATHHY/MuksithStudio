import React from "react";
import video from '../Assets/Videos/0528 (1).mp4'
import './BgVideo.css'

function BgVideo() {
    return (
        <div className="bgContainer">
            <div className="overlay">
                <video src={video} autoPlay loop muted/>    
            </div>
        </div>
    );
}

export default BgVideo;
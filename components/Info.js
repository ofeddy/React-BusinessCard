import React from "react"

export default function Info(){
    return(
        <div className="info-container">
            <img src="../media/photo.jpg"/>
            <h3>Ferdinand Odhiambo</h3>
            <h5>Frontend Developer</h5>
            <a href="#">Portfolio Site</a>
            <div className="info-cta">
                <a href="#" className="email-cta">
                    <img src="../media/Mail.png" />
                    Email
                </a>
                <a href="#" className="linkedin-cta">
                 <img src="../media/linkedin.png" />
                 LinkedIn
                </a>
            </div>
        
        </div>
    )
}

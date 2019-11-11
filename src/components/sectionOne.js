import React from 'react'

import FajarImage from "../components/image"
import SuperMakersLogo from "../components/imageKoji"
import './css/section-one.css'

const SectionOne = () => {
    return (
        <div className="section-one">
            <div className="fajar-picture">
                <img className="image1" src={require('../images/FSgrey.png')}/>
            </div>
            <div className="supermaker-logo">
                <img className="image2" src={require('../images/SuperMakersLogo.png')}/>
            </div>
        </div>
    )
}

export default SectionOne
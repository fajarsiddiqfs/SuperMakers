import React from 'react'

import './css/section-four.css'

const SectionFour = () => {
    return (
        <div className="section-four">
                <div className="heading">
                    <h2>🚀 Launched on Product Hunt</h2>
                </div>
                <iframe style={{border: 'none'}} src="https://cards.producthunt.com/cards/posts/151790?v=1" width="450" height="350" frameborder="0" scrolling="no" allowfullscreen></iframe>
                <br/>
                <br/>
                <br/>
                <a href="https://www.supermakers.xyz">
                <img className="fs-logo" className="image1" src={require('../images/SM400.png')}/></a>
        </div>
    )
}

export default SectionFour
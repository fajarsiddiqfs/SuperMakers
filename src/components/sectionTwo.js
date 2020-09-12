import React from 'react'

import './css/section-two.css'

const SectionTwo = () => {
    return (
        <div className="section-two">
                <div className="main-card">
                    <div className="card-iframe">
                         <iframe src="https://withkoji.com/embed/0b9ac03c-019c-443c-947a-61fbf62b95ee" width="100%" height="350" frameborder="0" allowfullscreen />
                    </div>
                    <div className="section-two-info">
                        <a href="https://www.producthunt.com/posts/supermakers?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-supermakers" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=151790&theme=dark" alt="SuperMakers - An indie game built with no code | Product Hunt Embed" style={{width: 250, height: 54}} width="250px" height="54px" /></a>
                        <h3>🎮 The Indie Game </h3>
                        <p>#4th Product Of The Day on Product Hunt. Made by Fajar Siddiq, Shipping is always fast!<br/>This game was made in 3 minutes at Koji <br/> ⚡️ Let’s play & beat the highscore!</p>
                            <div className="card-btn">
                            <a href="https://withkoji.com/~fajarsiddiq/supermakers-xyz">⚡️ Let’s Play</a>
                        </div>
                    </div>
                </div>

                <div className="iframe-lists">
                    <iframe src="https://withkoji.com/embed/0b9ac03c-019c-443c-947a-61fbf62b95ee" width="400" height="242" frameborder="0" allowfullscreen />

                    <iframe src="https://withkoji.com/embed/2f706c82-c68a-4ae8-841f-6fa9db7c9437" width="400" height="242" frameborder="0" allowfullscreen />

                    <iframe src="https://withkoji.com/embed/35304e4f-0755-4a7b-af8c-fb00d56ad054" width="400" height="242" frameborder="0" allowfullscreen />

                    <iframe src="https://withkoji.com/embed/79e4e535-d6eb-4a35-9115-acd0a76f3cc9" width="400" height="242" frameborder="0" allowfullscreen />

                </div>

                <div className="section-three-end">
                    <h3>👊 Build Games <br/>with No-Code</h3>
                    <p>Modern "Progressive Web Apps" on any browser and every device. Deploy on Koji.</p>
                    <a href="https://withkoji.com/"><img className="image1" src={require('../images/Koji.png')} height="167px"/></a>
                </div>

<div className="divider" style={{border: "2px solid #1E1E1E", width: "90%", margin: "0 auto"}}/>
        </div>
    )
}

export default SectionTwo

import React from 'react'
import {TwitterTweetEmbed} from 'react-twitter-embed';
import Masonry from 'react-masonry-css'

import './css/section-three.css'

const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

const SectionThree = () => {
    return (
        <div className="section-three">
                <div className="heading">
                    <h2>What others say about Supermakers?</h2>
                    <p>Testimonial of makers playing the game at Supermakers. Thanks a million guys!</p>
                </div>

                <div className="testimonals">

                <Masonry
  breakpointCols={breakpointColumnsObj}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column"
>
<div className="test-card">
                    <TwitterTweetEmbed options={{theme: 'dark' }} tweetId="1121085893304102912" />
                    </div>
                    <div className="test-card">
                    <TwitterTweetEmbed options={{theme: 'dark' }} tweetId="1118682613546250240" />
                    </div>
                    <div className="test-card">
                    <TwitterTweetEmbed options={{theme: 'dark' }} tweetId="1118893972137574400" />

                    </div>
                    <div className="test-card">
                    <TwitterTweetEmbed options={{theme: 'dark' }} tweetId="1118890582603026432" />
                    </div>
                    <div className="test-card">
                    <TwitterTweetEmbed options={{theme: 'dark' }} tweetId="1118945491952250881" />

                    </div>
                    <div className="test-card">
                    <TwitterTweetEmbed options={{theme: 'dark' }} tweetId="1118912089706455041" />

                    </div>
</Masonry>

                    
                </div>

<div className="divider" style={{border: "2px solid #1E1E1E", width: "90%", margin: "0 auto"}}/>
        </div>
    )
}

export default SectionThree
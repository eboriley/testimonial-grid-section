import React from 'react'
import jeanetteHarmon from "../src/images/image-jeanette.jpg"
import "./SectionThree.css"

function SectionThree() {
    return (
        <div className="section_three">
             <div className="section_three__name">
            <img
            className="image"
            src={jeanetteHarmon}
            alt="jeanette's-avatar"
            />
            <div className="person">
            <p>Jeanette harmon</p>
            <small>Verified Graduate</small>
            </div>
            </div>
            <h1>An overall wonderful and rewarding experience</h1>
            <p> “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
                while doing something I love. ”</p>
        </div>
    )
}

export default SectionThree

import React from 'react'
import jonathanAvatar from '../src/images/image-jonathan.jpg'
import './SectionTwo.css';

function SectionTwo() {
    return (
        <div className="section_two">
            <div className="section_two__name">
            <img
            className="image"
            src={jonathanAvatar}
            alt="jonathan's-avatar"
            />
            <div className="person">
            <p>Jonathan Walters</p>
            <small>Verified Graduate</small>
            </div>
            </div>
            <h1>The team was very supportive and kept me motivated</h1>
            <p>“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
            for a big company. This was one of the best investments I’ve made in myself. ”</p>
        </div>
    )
}

export default SectionTwo

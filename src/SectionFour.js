import React from 'react';
import patrickAbrams from '../src/images/image-patrick.jpg';
import './SectionFour.css'

function SectionFour() {
    return (
        <div className="section_four">
             <div className="section_four__name">
            <img
            className="image"
            src={patrickAbrams}
            alt="patrick's-avatar"
            />
            <div className="person">
            <p>Patrick Abrams</p>
            <small>Verified Graduate</small>
            </div>
            </div>
            <h1> Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
                learning from their experiences was easy.</h1>
            <p>  “ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
                 gave me the confidence necessary to be able to go out in the world and present myself as a capable 
                junior developer. The standard is above the rest. You will get the personal attention you need from 
                 an incredible community of smart and amazing people. ”</p>
        </div>
    )
}

export default SectionFour

import React from 'react';
import danielAvatar from '../src/images/image-daniel.jpg';
import './SectionOne.css';
function Daniel() { 
    return (
        <div className="section_one">
            <div className="section_one__name">
            <img
            className="image"
            src={danielAvatar}
            alt="daniel's-avatar"
            />
            <div className="person">
            <p>Daniel Clifford</p>
            <small>Verified Graduate</small>
            </div>
            </div>
            <h1>I received a job offer mid-course, and the subjects I learned were current, if not more so, 
                in the company I joined. I honestly feel I got every penny’s worth.</h1>
            <p>“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
            transition and have heard some people who had an amazing experience here. I signed up 
            for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
            The next 12 weeks was the best - and most grueling - time of my life. Since completing 
            the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”</p>
        </div>
    )
}

export default Daniel

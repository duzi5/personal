import React from 'react';
import "./Projects.scss"
import { BiArrowBack } from 'react-icons/bi';
import gsap from 'gsap';
const BackButton = () => {

    const handleClick = () => { 
        gsap.to('.main', { 
            duration: 1,
            opacity: 0,
            ease: "inOut",
            onComplete: () => {
                window.location.href = "/"
            }
        
        })
        
    }

    return (
        <button className='back' onClick={handleClick}><BiArrowBack/></button>
    );
}

export default BackButton;

import React, { useEffect } from 'react';
import "./Initial.scss"
import gsap from 'gsap';
const MenuButton = ({text, link}) => {
    useEffect(()=>{
        gsap.to(".btn-projects", {duration: 1, opacity: 1, ease: "inOut", repeat:-1})
        
        ;
    },[])

    const showProjects = (e) => {
        gsap.to('.Initial',{
            duration: 1,
            opacity: 0,
            ease: "inOut",
            onComplete: () => {
                window.location.href = "/" + link
            }
        } )
    }




    return (

        <div>
            <button onClick={showProjects} className="btn-projects">{text}</button>
        </div>
    );
}

export default MenuButton;

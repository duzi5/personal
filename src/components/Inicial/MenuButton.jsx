import React, { useEffect } from 'react';
import "./Initial.scss"
import gsap from 'gsap';
const MenuButton = ({text, link}) => {
    useEffect(()=>{
        gsap.to(".btn-projects", {duration: 1, opacity: 1, ease: "inOut", repeat:-1})
        gsap.to(".btnbtn", {
            duration: 3,
            opacity:0.4,
            ease: "bounce",
            yoyo: true, 
            repeat: -1,
            y:"+=10",
            stagger: 3
        })
        gsap.to(".btnbtn", {
            duration: 3,
            x:"-=10",
        
            ease: "linear",
            yoyo: true, 
            repeat: -1,
        })
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
            <button onClick={showProjects} className="btnbtn">{text}</button>
        </div>
    );
}

export default MenuButton;

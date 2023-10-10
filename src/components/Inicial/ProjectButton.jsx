import React, { useEffect } from 'react';
import "./Initial.scss"
import gsap from 'gsap';
const ProjectButton = () => {
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
                window.location.href = "/projects"
            }
        } )
    }




    return (

        <div>
            <button onClick={showProjects} className="btn-projects">PROJECTS</button>
        </div>
    );
}

export default ProjectButton;

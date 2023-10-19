import React, { useEffect, useRef } from "react";
import "./Projects.scss";
import BackButton from "./BackButton";
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import predios from './predios.jpg'
gsap.registerPlugin(ScrollTrigger);


const Projects = () => {
const sloganRef = useRef(null)
  useEffect(() => {
    const liHeight = 200; // altura estimada do li, pode ajustar conforme necessário

    gsap.fromTo(sloganRef.current,{opacity:0.7},{ 
        x: -sloganRef.current.offsetWidth,
        opacity:1,
      scrollTrigger:{
        trigger: sloganRef.current,
        scrub:true,
        start: "-20% 75%",
        end: "+120% 25%",
        toggleActions: "play pause reverse pause",
        markers: true,
        pin:true,
              }
    })
gsap.to("#predios", {
  x:120,
  scrollTrigger:{
    trigger:"#predios",
    start: "top 25%",
    end: "bottom 25%",
    scrub:true, 
    pin: true,
    markers:true,
    toggleActions: "play pause pause pause"
  }
})



    gsap.utils.toArray('.negative').forEach((el, index) => {
        gsap.fromTo(el, 
            { x: el.offsetWidth }, 
            { 
                x: -el.offsetWidth + 500, 
                scrollTrigger: {
                    trigger: el,
                    start: `${index * liHeight} bottom`,  // Ajuste com base no índice e na altura do li
                    end: `${(index + 1) * liHeight} top`,
                    scrub: 1,
                    pin:true,
                    // markers: true,
                    toggleActions: "start pause reverse pause"
                }
            });
    });

    gsap.utils.toArray('.positive').forEach((el, index) => {
        gsap.fromTo(el, 
            { x: -el.offsetWidth }, 
            { 
                x: el.offsetWidth + 500, 
                scrollTrigger: {
                    trigger: el,
                    start: `${index * liHeight} bottom`,  // Ajuste com base no índice e na altura do li
                    end: `${(index + 1) * liHeight} top`,
                    scrub: 1,
                    pin: true,
                    // markers: true,
                    toggleActions: "start pause reverse pause"
                }
            });
    });
}, []);


  // gsap.set("#house-hold", { rotation: 15,
  //   marginBottom:"800px" });
  // const tl3 = gsap.timeline({
  //     scrollTrigger: {
  //         trigger: "#house-hold",
  //         start: "400 bottom",
  //         end: "1200 400",
  //         scrub: 1,
  //         markers: true,
  //         toggleActions: "start pause reverse pause"
  //     }
  // });

  // tl.to("#house-hold", { x: "-3500px" });


  return (
    <div className="main">
        <BackButton />
      <div className="cabecalho">
        <p className="msg-inclined"> <marquee  scrollamount="60" bgcolor="black">  I find myself divided between Studio Catavento and Akiva, my current challenges. It's been a genuine pleasure to develop and nurture both ventures</marquee></p>
        <h1>Projects</h1>
      </div>
      <div className="links">
        <div className="link1 link original-transform">
          <h3>Akiva</h3>
          
          <img id="predios" src={predios} alt="Predios de Nova York" />
          
          <h4 className="slogan" ref={sloganRef}>Empower Your Family's Financial Future with Akiva!</h4>

          <p>
            Discover a simpler way to manage your family's finances with Akiva,
            the leading family financial management tool. Whether you're
            budgeting for monthly expenses, planning for future vacations, or
            saving for your child's education, Akiva has got you covered.
          </p>
          <ul>
            <li id="house-hold" className="negative ">
              Household Budgeting: Easily set up and manage monthly or yearly
              family budgets.
            </li>
            <li id="expense" className="positive">
              Expense Tracking: Capture every expenditure and understand where
              every penny goes with Akiva.
            </li>
            <li className="negative">
              Savings Goals: Define your financial goals, be it a new home, a
              dream vacation, or an emergency fund.
            </li>
            <li className="positive">
              Debt Management: Keep track of any loans or debts and design a
              plan to pay them off with Akiva's intuitive interface.
            </li>
            <li className="negative">
              Interactive Reports: Visually understand your income, expenses,
              and savings through interactive charts and graphs, all within
              Akiva.
            </li>
            <li className="positive">
              Secure & Private: Your data is encrypted with Akiva, ensuring your
              financial details remain private and secure.
            </li>
          </ul>
        </div>
        <div className="link2 link original-transform">
          <h3>Studio Catavento</h3>
          <h5>for Web Art</h5>
          <h4>Bring Ideas to Life with Studio Catavento!</h4>
          <p>
            Welcome to Studio Catavento – the hub of creativity where your
            visions soar to new heights. As your trusted creative partner, we're
            committed to translating your ideas into tangible masterpieces. From
            intricate designs to expansive campaigns, Studio Catavento is where
            imagination meets execution.
          </p>
          <ul>
            <li>
              Tailored Branding: Craft a brand identity that truly represents
              your essence. With Studio Catavento, make a statement that lasts.{" "}
            </li>
            <li>
              Digital Excellence: Navigate the digital realm with our
              cutting-edge web designs, immersive UI/UX, and innovative
              solutions.
            </li>
            <li>
              Print Magic: Showcase your message through compelling print
              designs, from impactful brochures to striking banners.
            </li>
            <li>
              Insightful Consultations: Leverage our deep industry knowledge and
              creative strategies to elevate your projects.
            </li>
            <li>
              Holistic Campaigns: Seamlessly integrate across platforms, be it
              digital or print, ensuring your message resonates.
            </li>
            <li>
              Dedication to Your Vision: At Studio Catavento, we champion your
              ideas, ensuring they are at the heart of every creation.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;

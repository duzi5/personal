import React from 'react';
import Typed from 'typed.js';
import "./Initial.scss"
import foto from "./foto.jpeg"
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

import MenuButton from './MenuButton';
export default function Initial() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Duzis</i> is a developer', '<i>Duzis</i> is an artist', '<i>Duzis</i> is an economist'],
      typeSpeed: 100,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="Initial">
      <div className="menu">
        <MenuButton text="Bio" link={"bio"} />
        <MenuButton text="Projects" link={"projects"} />
      </div>
    <div className='foto'>
      <img src={foto} alt="" />
    </div>
      <div className='text'>
        <span ref={el} className='span' />
      </div>
      <div className="links2">
      <a><AiOutlineInstagram /></a>
      <a>
         <AiOutlineLinkedin />
        </a>     
        <a>
      <AiOutlineGithub/>

        </a>

      </div>
    </div>
  );
}
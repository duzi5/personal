import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import "./Initial.scss"
import foto from "./foto.jpeg"
import gsap from 'gsap';
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs"
import MenuButton from './MenuButton';
import audioFile from './apt.mp3'

export default function Initial() {
  const el = useRef(null);
  const audioRef = useRef(null); // Referência para o elemento de áudio
  
      const wave1Ref = useRef(null);
      const wave2Ref = useRef(null);
      const wave3Ref = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Duzis</i> is a developer', '<i>Duzis</i> is an artist', '<i>Duzis</i> is an economist'],
      typeSpeed: 100,
      loop: true
    });
    
    





    return () => {
      typed.destroy();
    };
  }, []);
  const stopAllAnimations = () => {
    rotationTween.current.pause();
    gsap.killTweensOf([wave1Ref.current, wave2Ref.current, wave3Ref.current]);
    gsap.to([wave1Ref.current, wave2Ref.current, wave3Ref.current], {
        opacity: 0, 
        scale: 1, 
        duration: 1                                   
    });
};

  useEffect(() => {
    const handleAudioEnd = () => {
        setRotating(false); // Desativa o modo rotating
        rotationTween.current.pause(); // Pausa a rotação
        gsap.to([wave1Ref.current, wave2Ref.current, wave3Ref.current], {
            opacity: 0, 
            scale: 1, 
            duration: 1
        }); // Esconde as ondas
    };

    const audioEl = audioRef.current;
    audioEl.addEventListener("ended", handleAudioEnd);  // Adiciona o listener

    return () => {
        audioEl.removeEventListener("ended", handleAudioEnd);  // Remove o listener ao desmontar
    };
}, []);

  const [rotating, setRotating] = useState(false);
  const imageRef = useRef(null);
  let rotationTween = useRef(null);
  const toggleRotationAndAudio = () => {
    if (rotating) {
      stopAllAnimations();

        rotationTween.current.pause();
        audioRef.current.pause(); // Pausa o áudio

        // Esconde as ondas e pausa qualquer animação
        gsap.killTweensOf([wave1Ref.current, wave2Ref.current, wave3Ref.current]);
        gsap.to([wave1Ref.current, wave2Ref.current, wave3Ref.current], {
            opacity: 0, 
            scale: 1, 
            duration: 1
        });

    } else {
        rotationTween.current = gsap.to(imageRef.current, {
            rotation: "+=360",
            repeat: -1,
            duration: 5,
            ease: "none"
        });
        audioRef.current.play(); // Inicia o áudio

        // Animações das ondas
        gsap.fromTo(wave1Ref.current, 
            { opacity: 0.7, scale: 1 },
            { opacity: 0, scale: 1.5, duration: 1, repeat: -1, yoyo: true }
        );
        gsap.fromTo(wave2Ref.current, 
            { opacity: 0.7, scale: 1.1 },
            { opacity: 0, scale: 1.6, duration: 1, repeat: -1, yoyo: true, delay: 0.3 }
        );
        gsap.fromTo(wave3Ref.current, 
            { opacity: 0.7, scale: 1.2 },
            { opacity: 0, scale: 1.7, duration: 1, repeat: -1, yoyo: true, delay: 0.6 }
        );
    }

    setRotating(!rotating);
};
useEffect(() => {
  const handleAudioEnd = () => {
      stopAllAnimations(); // Para as animações quando o áudio termina
      setRotating(false); // Altera o estado para mostrar o botão de play
  };

  const audioEl = audioRef.current;
  audioEl.addEventListener("ended", handleAudioEnd);

  return () => {
      audioEl.removeEventListener("ended", handleAudioEnd);
  };
}, []);


  return (
    <div className="Initial">
      <div className="menu">
        <MenuButton text="Bio" link={"bio"} />
        <MenuButton text="Projects" link={"projects"} />
      </div>
      <div className='foto'>
      <div className="wave" ref={wave1Ref}></div>
    <div className="wave" ref={wave2Ref}></div>
    <div className="wave" ref={wave3Ref}></div>
        <img ref={imageRef} src={foto} alt="" />
        <div className='play' onClick={toggleRotationAndAudio}>
          {rotating ? <BsFillPauseFill /> : <BsFillPlayFill />}
        </div>
      </div>
      <div className='text'>
        <span ref={el} className='span' />
      </div>
      <div className="links2">
        <a><AiOutlineInstagram /></a>
        <a><AiOutlineLinkedin /></a>
        <a><AiOutlineGithub /></a>
      </div>
      <audio ref={audioRef} src={audioFile} preload="auto"></audio> {/* Elemento de áudio adicionado */}
    </div>
  );
}

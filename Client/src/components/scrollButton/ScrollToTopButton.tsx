import React, { useState, useEffect } from 'react';
import "./ScrollToTopButton.css"

const ScrollToTopButton: React.FC = () => {
    const [showButton, setShowButton] = useState(false);
    const [clicked, setClicked] = useState(false);
  
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowButton(scrollTop > 0);
    };
  
    const scrollToTop = () => {
      setClicked(true);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      setTimeout(() => {
        setClicked(false);
      }, 1000); // Ajusta la duración de la animación de despegue aquí
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <button
        className={`fixed bottom-4 right-4 z-10 p-2 rounded-full text-argentina transition-all duration-500 ${
          showButton ? 'opacity-100' : 'opacity-0'
        } ${clicked ? 'animate-takeoff' : ''}`}
        onClick={scrollToTop}
      >
        <i className="fa-solid fa-angles-up fa-xl"></i>
      </button>
    );
  };
  
  export default ScrollToTopButton;
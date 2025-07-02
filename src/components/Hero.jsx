import React, { useEffect,useRef, useState } from 'react';
import { gsap } from 'gsap';
import Lottie from 'lottie-react';
import animationData from '../assets/Logo-6-[remix] copy.json';
import logo from '../assets/DevSoc.png'

const Hero = () => {
  const heroRef = useRef(null);
  const logoRef = useRef(null);
  const [showLottie, setShowLottie] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const particlesRef = useRef(null);

useEffect(() => {
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-2 h-2 bg-teal-400/30 rounded-full';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particlesRef.current.appendChild(particle);
        
        // Animate particles with random movement
        gsap.to(particle, {
          y: -200,
          x: Math.random() * 100 - 50,
          opacity: 0,
          duration: Math.random() * 4 + 3,
          repeat: -1,
          delay: Math.random() * 3,
          ease: 'power1.out'
        });
      }
    };

    createParticles();

    if (logoRef.current) {
      gsap.set(logoRef.current, { 
        opacity: 0, 
        scale: 0.3, 
        y: 100,
        rotationY: 180,
        filter: 'blur(10px)'
      });
    }
    
    gsap.set('.fade-in:not(.logo)', { 
      opacity: 0, 
      y: 80,
      scale: 0.8
    });

    gsap.set('.floating-arrow', {
      opacity: 0,
      y: 50
    });

    

  }, []);
  const handleLottieComplete = () => {
    setShowLottie(false);
    setShowContent(true);
    
   setTimeout(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        logoRef.current,
        { 
          opacity: 0, 
          scale: 0.5,
          y: 0, // Start in center
          x: 0
        },
        { 
          opacity: 1, 
          scale: 1,
          y: 0,
          x: 0,
          duration: 1.2, 
          ease: 'power2.out'
        }
      );

      tl.fromTo(
        '.fade-in:not(.logo)',
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: 'power2.out' 
        },
        '-=0.5'
      );

      gsap.to('.floating-arrow', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    }, 100); 
  };


  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-0" />
      {/* Lottie Animation Overlay */}
      {showLottie && (
        <div className="fixed inset-0 z-50 bg-slate-50 dark:bg-gray-950 flex items-center justify-center">
          <div className="lottie-container">
            <div className="lottie-wrapper">
              <Lottie
                animationData={animationData}
                loop={false}
                autoplay={true}
                onComplete={handleLottieComplete}
                style={{ 
                  width: '100%', 
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
          </div>
        </div>
      )}
      {/* Main Content */}
      {showContent && (
        <div className="text-center max-w-6xl mx-auto pt-24 relative z-10">
          {/* Logo - Centered */}
          <div className="fade-in logo flex justify-center">
            <img 
              ref={logoRef}
              src={logo} 
              alt="DEVSOC Logo" 
              className="max-w-xl w-full h-auto drop-shadow-2xl"
            />
          </div>
          <div className="fade-in mb-12">
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              A community of passionate developers building the future through 
              innovation, collaboration, and excellence in technology.
            </p>
          </div>

          <div className="fade-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">

            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border border-slate-300 dark:border-slate-600 rounded-full text-slate-700 dark:text-slate-300 hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-200 font-medium hover:scale-105 transform"
            >
              Learn More
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
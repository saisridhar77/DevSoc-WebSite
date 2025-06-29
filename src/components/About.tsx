import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Target, Lightbulb, Rocket } from 'lucide-react';

const About= () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      '.about-item',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const features = [
    {
      icon: Users,
      title: 'Community Driven',
      description: 'A vibrant community fostering collaboration and knowledge sharing.',
    },
    {
      icon: Target,
      title: 'Goal Oriented',
      description: 'Focused on achieving excellence through structured learning.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Encouraging creative solutions to real-world problems.',
    },
    {
      icon: Rocket,
      title: 'Career Growth',
      description: 'Providing opportunities for professional development.',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="about-item">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-slate-900 dark:text-slate-100">
              About <span className="font-bold text-teal-600 dark:text-teal-400">DEVSOC</span>
            </h2>
          </div>
          <div className="about-item">
            <div className="w-16 h-px bg-teal-600 dark:bg-teal-400 mx-auto mb-8" />
          </div>
          <div className="about-item">
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We are a dynamic developer society dedicated to fostering innovation, 
              collaboration, and excellence in technology. Our mission is to create 
              an inclusive environment where ideas flourish.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="about-item text-center group"
            >
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-600 dark:group-hover:bg-teal-500 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-slate-600 dark:text-slate-300 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
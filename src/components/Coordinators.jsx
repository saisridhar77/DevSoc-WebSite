import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Github } from 'lucide-react';
import padmanabhan from '../assets/padma.jpg';
import priyanshu from '../assets/priyanshu.jpg';
import arjav from '../assets/arjav.jpg';
import sai from '../assets/me.jpg';
import anirban from '../assets/anirban.jpg';
import siya from '../assets/siya.jpg';
import shaunak from '../assets/shaunak.jpg';


const Coordinators=() => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      '.coordinator-item',
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

  const coordinators = [
    {
      name: 'Padmanabhan Sridhar',
      role: 'Chief Coordinator',
      bio: 'Full-stack developer with a passion for open source and community building.',
      image: padmanabhan,
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Priyanshu Talwar',
      role: 'Sub-Coordinator and AI-ML Head',
      bio: 'AI enthusiast with expertise in machine learning and data science.',
      image: priyanshu,
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Arjav Patel',
      role: 'App Development Head',
      bio: 'Experienced app developer focused on creating innovative mobile solutions.',
      image: arjav,
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Sai Sridhar',
      role: 'Web Development Head',
      bio: 'Web developer specializing in modern frameworks and responsive design.',
      image: sai,
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Anirban Deshmukh',
      role: 'Game Development Head',
      bio: 'Game developer with a passion for creating immersive gaming experiences.',
      image: anirban,
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Siya Goel',
      role: 'UX/UI Head',
      bio: 'UX/UI designer passionate about creating intuitive user experiences.',
      image: siya,
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Shaunak Aghor',
      role: 'Project SysCall Head',
      bio: 'Project manager with a focus on system calls and low-level programming.',
      image: shaunak,
      linkedin: '#',
      github: '#',
    }
  ];

  return (
    <section id="coordinators" ref={sectionRef} className="py-24 px-6  bg-slate-50 dark:bg-gray-950">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="coordinator-item">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-gray-900 dark:text-white">
              Meet Our <span className="font-bold text-teal-600">Team</span>
            </h2>
          </div>
          <div className="coordinator-item">
            <div className="w-16 h-px bg-teal-600 mx-auto mb-8" />
          </div>
          <div className="coordinator-item">
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our dedicated coordinators bring diverse expertise and passion to drive 
              DEVSOC's mission forward. Get to know the leaders behind our community.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {coordinators.map((coordinator, index) => (
            <div
              key={index}
              className="coordinator-item bg-white dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg dark:hover:shadow-2xl transition-shadow duration-300 group border border-gray-100 dark:border-gray-700"
            >
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src={coordinator.image}
                  alt={coordinator.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {coordinator.name}
              </h3>

              <p className="text-sm font-medium text-teal-600 mb-1">
                {coordinator.role}
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {coordinator.bio}
              </p>

              <div className="flex justify-center space-x-3">
                <a
                  href={coordinator.linkedin}
                  className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-teal-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={coordinator.github}
                  className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  <Github className="w-4 h-4" />
                </a>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coordinators;
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  Smartphone, 
  Gamepad, 
  Brain, 
  PaintBucket,
  HardDrive
} from 'lucide-react';

const Verticals = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      '.vertical-item',
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

  const verticals = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack web applications using modern frameworks and technologies.',
      tech: ['React', 'Node.js', 'Next.js','three.js'],
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      tech: ['React Native', 'Flutter', 'Swift'],
    },
    {
      icon: Gamepad,
      title: 'Game Development',
      description: 'Immersive gaming experiences across platforms.',
      tech: ['Unity', 'Unreal Engine', 'C#'],
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent systems and data-driven solutions using ML algorithms.',
      tech: ['Python', 'TensorFlow', 'PyTorch'],
    },
    {
      icon: PaintBucket,
      title: 'UI/UX Design',
      description: 'Crafting user-centric designs and seamless experiences.',
      tech: ['Figma', 'Sketch', 'Adobe XD'],
    },
    {
      icon: HardDrive,
      title: 'Project SysCall',
      description: 'Low level Development and bare-metal related development',
      tech: ['Assembly ', 'C++', 'bare-metal'],
    },
  ];

  return (
    <section id="verticals" ref={sectionRef} className="py-8 px-6  bg-slate-50 dark:bg-gray-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="vertical-item">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-gray-900 dark:text-white">
              Our <span className="font-bold text-teal-600">Verticals</span>
            </h2>
          </div>
          <div className="vertical-item">
            <div className="w-16 h-px bg-teal-600 mx-auto mb-8" />
          </div>
          <div className="vertical-item">
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our diverse range of technical domains where innovation meets expertise. 
              Each vertical represents our commitment to excellence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {verticals.map((vertical, index) => (
            <div
              key={index}
              className="vertical-item bg-white dark:bg-gray-800 rounded-lg p-8 hover:shadow-lg dark:hover:shadow-2xl transition-shadow duration-300 group border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                <vertical.icon className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {vertical.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {vertical.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {vertical.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Verticals;
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import devfest4 from '../assets/devfest4.0.png';
import spree25 from '../assets/spree25.png';

const ProjectsPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      '.project-item',
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

  const projects = [
  {
    title: 'DevFest 4.0 Website',
    description: 'Official website for DevFest 4.0 by DevSoc BPGC, showcasing the event schedule, speakers, hackathons, and registration.',
    tech: ['React', 'JavaScript', 'SCSS', 'HTML', 'CSS'],
    category: 'Web Development',
    date: '2023',
    status: 'Live',
    github: 'https://github.com/Devsoc-BPGC/DevFest',
    demo: 'https://fest.devsoc.club/',
    image: devfest4,  
    features: ['Dynamic schedule', 'Speaker profiles', 'Responsive UI', 'Hackathon info']
  },
  {
    title: 'Spree245 Website',
    description: 'Event portal “Spree24” with registration flow and details for DevSoc’s annual technical spree.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    category: 'Web Development',
    date: '2025',
    status: 'Live',
    github: 'https://github.com/Devsoc-BPGC/spree24',
    demo: '#',
    image: spree25,
    features: ['Event info pages', 'Registration forms', 'Responsive design']
  },
  {
    title: 'Quark 2024 Website',
    description: 'Frontend for Quark technical fest (2024) website built using React + Vite template.',
    tech: ['React', 'JavaScript', 'Vite', 'Tailwind CSS'],
    category: 'Web Development',
    date: '2024',
    status: 'Live',
    github: 'https://github.com/Devsoc-BPGC/quark-24',
    demo: '#',
    image: 'https://images.pexels.com/photos/3184304/pexels-photo-3184304.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Fast HMR dev setup', 'Event details', 'Mobile-friendly layout']
  },
  {
    title: 'Auto-CampNet',
    description: 'Cross-platform Rust + Tauri desktop application to automate login to the BPGC campus Wi-Fi network.',
    tech: ['Rust', 'TypeScript', 'Tauri'],
    category: 'Desktop App',
    date: '2024',
    status: 'Live',
    github: 'https://github.com/Devsoc-BPGC/auto-campnet',
    demo: '#',
    image: 'https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Auto Wi‑Fi login', 'Cross‑platform GUI', 'Offline installer']
  },
  {
    title: 'SIS Conference Website',
    description: 'Next.js-powered static site for SIS Conference 2024, featuring schedule and speaker details.',
    tech: ['Next.js', 'React', 'JavaScript', 'HTML', 'CSS'],
    category: 'Web Development',
    date: '2024',
    status: 'Live',
    github: 'https://github.com/Devsoc-BPGC/sis-website',
    demo: 'https://sis2024.netlify.app',
    image: 'https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Static site generation', 'Event schedule', 'SEO optimized']
  },
  {
    title: 'PMT (Mello) Frontend',
    description: 'React + TypeScript frontend for DevSoc’s in-house Project Management Tool “Mello”.',
    tech: ['React', 'TypeScript', 'Redux', 'CSS'],
    category: 'Web Development',
    date: '2025',
    status: 'Live',
    github: 'https://github.com/Devsoc-BPGC/pmt-frontend',
    demo: '#',
    image: 'https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Kanban-style boards', 'Task management', 'Team collaboration']
  },
  {
    title: 'PMT (Mello) Backend',
    description: 'Node.js + TypeScript backend API for “Mello”, handling auth, permissions, and CRUD operations.',
    tech: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL'],
    category: 'Backend Development',
    date: '2025',
    status: 'Live',
    github: 'https://github.com/Devsoc-BPGC/pmt-backend',
    demo: '#',
    image: 'https://images.pexels.com/photos/574072/pexels-photo-574072.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['REST API', 'User auth', 'Project/task management']
  },
  {
    title: 'Spree 2023 / waves2020_reg_portal',
    description: 'Earlier version of Spree / Waves registration portal serving DevSoc’s tech events.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    category: 'Web Development',
    date: '2023',
    status: 'Live',
    github: 'https://github.com/Devsoc-BPGC/waves2020_reg_portal',
    demo: '#',
    image: 'https://images.pexels.com/photos/3181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Event registration', 'Info panels', 'Responsive design']
  }
];



  return (
    <div className="pt-20">
      <section ref={sectionRef} className="py-10 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
          
            <div className="project-item">
              <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight text-gray-900 dark:text-white">
                Our <span className="font-bold text-teal-600">Projects</span>
              </h1>
            </div>
            <div className="project-item">
              <div className="w-16 h-px bg-teal-600 mx-auto mb-8" />
            </div>
            <div className="project-item">
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Discover the innovative solutions we've built. Each project represents 
                our commitment to solving real-world problems through cutting-edge technology 
                and collaborative development.
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-item bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-700 hover:scale-105"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />    
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                    <div className="flex items-center text-gray-400 dark:text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-1 h-1 bg-teal-600 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 text-sm"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="project-item">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Want to contribute?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our community and help us build the next generation of innovative solutions. 
                Whether you're a beginner or an expert, there's a place for you in our projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:border-teal-600 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 font-medium">
                  View on GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
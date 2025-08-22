import React, { useEffect, useRef } from "react";
import Vid from "../components/vid";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, Calendar } from "lucide-react";
import waves25 from "../assets/Waves.png";
import wavem25 from "../assets/wavesm.jpg";
import classsync from "../assets/classsync.png";
import maestro from "../assets/maestro.jpg";
import client from "../assets/client.jpg";

const ProjectsPage = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      ".project-item",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const projects = [
    {
      title: "Fest Websites",
      description: "Websites for the Fest of Bits Goa",
      category: "Web Development",
      date: "2023",
      status: "Live",
      image: waves25,
    },
    {
      title: "Fest Apps",
      description: "Mobile applications for the Fests of Bits Goa",
      tech: ["Flutter", "Dart", "Firebase"],
      category: "App Development",
      date: "2025",
      status: "Live",
      image: wavem25,
    },
    {
      title: "Class Sync",
      description: "Smart tool that captures your timetable as a screenshot and seamlessly adds it to Google Calendar for easy access and reminders.",
      category: "Web Development",
      date: "2025",
      status: "Live",
      image: classsync,
    },
    {
      title: "Maestro Website",
      description:"E-commerce Website for Maestro",
      category: "Website",
      date: "2024",
      status: "Live",
      image: maestro,
    },
    {
      title: "Client Projects",
      description:"Various client projects showcasing our expertise.",
      category: "All",
      date: "2025",
      status: "Live",
      image: client,
    },
  ];

  return (
    <div className="pt-20">
      <Vid />
      <section ref={sectionRef} className=" px-6">
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
                Discover the innovative solutions we've built. Each project
                represents our commitment to solving real-world problems through
                cutting-edge technology and collaborative development.
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="flex flex-wrap justify-center gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-item w-full sm:w-[45%] md:w-[30%] lg:w-[30%] 
                 bg-white dark:bg-gray-800 rounded-lg overflow-hidden 
                 hover:shadow-lg dark:hover:shadow-2xl transition-all 
                 duration-300 group border border-gray-100 dark:border-gray-700 
                 hover:scale-105"
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
                Join our community and help us build the next generation of
                innovative solutions. Whether you're a beginner or an expert,
                there's a place for you in our projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/Devsoc-BPGC"
                  className="px-8 py-3 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:border-teal-600 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 font-medium"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;

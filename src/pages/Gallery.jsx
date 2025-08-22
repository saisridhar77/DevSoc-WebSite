import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GalleryPage = () => {
  const sectionRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      ".gallery-item",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
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

  // ✅ Dynamic import of all images in /gallery folder
  const images = Object.values(
    import.meta.glob("../gallery/*.{png,jpg,jpeg}", { eager: true })
  ).map((img) => img.default);

  return (
    <div className="pt-20 px-6">
      {/* Heading + Description */}
      <div className="text-center mb-16">
        <div className="gallery-item">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-gray-900 dark:text-white">
            Our <span className="font-bold text-teal-600">Memories</span>
          </h2>
        </div>
        <div className="gallery-item">
          <div className="w-16 h-px bg-teal-600 mx-auto mb-8" />
        </div>
        <div className="gallery-item">
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A glimpse of our journey through photos — capturing the moments, the
            laughter, and the stories that make us who we are. Scroll down to
            explore our gallery!
          </p>
        </div>
      </div>

      {/* Gallery */}
      <section
        ref={sectionRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="gallery-item overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default GalleryPage;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import vid from "../assets/vid.mp4";

const Vid = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  
 useEffect(() => {
    // Video scroll animation
    const video = videoRef.current;
    if (video) {
      const handleLoadedMetadata = () => {
        const videoDuration = video.duration;
        const scrollDuration = videoDuration * 100;


        gsap.to(video, {
          scrollTrigger: {
            trigger: "#vid",
            start: 0,
            end: `${scrollDuration}vh`,
            scrub: 2,
            pin: true,
            markers: false,
          },
          currentTime: videoDuration,
        });
      };

      video.addEventListener("loadedmetadata", handleLoadedMetadata);

      return () => {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div >
      <section ref={sectionRef} className="flex justify-center px-6 ">
        <div className="container w-full h-full object-cover max-w-7xl ">
          {/* Video Section */}
          <div id="vid" className=" relative mb-16 w-full h-80vh flex items-center justify-center bg-rgba(0, 0, 0, 0.8)">
            <video 
              ref={videoRef} 
              src={vid} 
              muted
              preload="auto"
              className="w-full"
            ></video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vid;

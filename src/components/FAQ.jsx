import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const sectionRef = useRef(null);
  const [openItems, setOpenItems] = useState([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      '.faq-item',
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

  const toggleItem = (index) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'What is DEVSOC?',
      answer: 'DevSoc, short for Developers\' Society, is a vibrant community of passionate developers in our college. We specialize in various fields such as App Development, Web Development, Game Development, and UI/UX Designing.'
    },
    {
      question: 'Who can join DEVSOC?',
      answer: 'DevSoc welcomes students from all disciplines and skill levels. Whether you\'re a beginner or an experienced developer, as long as you have a passion for coding and technology, you\'re more than welcome to join us!'
    },
    {
      question: 'How can I become a member of DevSoc?',
      answer: 'DevSoc holds inductions once a year where you walk-in for an interview. We have a crew system where students can join and learn from the senior members. After a certain period, they can be promoted to the core team. You can always reach out to the club coordinators to discuss the possibility of untimely induction.'
    },
    {
      question: 'I missed the club induction, can I still be a member of DevSoc?',
      answer: 'We understand that sometimes you may have exceptional circumstances and missed the regular induction process. In such cases, don\'t worry! You can always reach out to the club coordinators to discuss the possibility of untimely induction. We value enthusiasm and talent, and we\'re open to accommodating exceptional cases whenever possible.'
    },
    {
      question: 'What activities does DevSoc organize?',
      answer: 'DevSoc organizes a wide range of activities including workshops, sessions, hackathons, and collaborative projects. Besides organizing events in BITS Goa’s technical fest, Quark, we also organize our very own flagship event, DevFest.'
    },
    {
      question: 'Do I need to have prior coding experience to join DevSoc?',
      answer: 'No, prior coding experience is not mandatory. DevSoc is a place for both beginners and experienced developers. We provide resources, mentorship, and learning opportunities for everyone to grow their skills.'
    },
    {
      question: 'Can I contribute my ideas and projects to DevSoc?',
      answer: 'Absolutely! DevSoc encourages all members to contribute their ideas, projects, and initiatives. We believe in fostering a collaborative environment where everyone\'s creativity and innovation can thrive.'
    },
    {
      question: 'How can I stay updated with DevSoc\'s activities?',
      answer: 'To stay updated with DevSoc\'s activities, you can follow us on social media platforms like LinkedIn, Instagram and Facebook. You can also regularly check our website for announcements, event details, and the latest news.'
    },
    {
      question: 'How can I stay updated with DEVSOC activities?',
      answer: 'Follow us on our social media channels, join our Discord/Slack community, subscribe to our newsletter, and regularly check our website for updates. We also send regular announcements about upcoming events and opportunities.'
    }
  ];

  return (
    <section id="faq" ref={sectionRef} className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="faq-item">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-gray-900 dark:text-white">
              Frequently Asked <span className="font-bold text-teal-600">Questions</span>
            </h2>
          </div>
          <div className="faq-item">
            <div className="w-16 h-px bg-teal-600 mx-auto mb-8" />
          </div>
          <div className="faq-item">
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about DEVSOC, our activities, 
              and how you can get involved in our community.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
              >
                <span className="font-medium text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                {openItems.includes(index) ? (
                  <Minus className="w-5 h-5 text-teal-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-teal-600 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default FAQ;
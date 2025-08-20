import React from "react";
import devtestwhite from "../assets/DevTextWhite.png";
import logo from "../assets/DevSocLogo.png";

import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Devsoc-BPGC", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://in.linkedin.com/company/devsoc-bpgc",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/devsocbitsgoa/?hl=en",
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/channel/UCOYKNjQaifpxy5qG3as82ZA",
      label: "YouTube",
    },
  ];



  return (
    <footer
      id="contact"
      className="bg-[#15292d] dark:bg-black text-white py-8 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src={logo} alt="DevSoc Logo" className="w-10 h-8" />

              <img
                src={devtestwhite}
                alt="DevSoc Logo Light"
                className="w-15 h-8"
              />
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
              Empowering the next generation of developers through innovation,
              collaboration, and cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:text-teal-600 hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          
          <div>
            
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-teal-600" />
                <span>devsocbpgc@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-teal-600" />
                <span>Bits Pilani - Goa Campus</span>
              </div>
            </div>
          </div>
        </div>
        <div className="  border-t border-gray-800 dark:border-gray-900 text-center">
          <p className="text-gray-400">
            Made with <span className="text-red-500">♥</span> by DevSoc
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

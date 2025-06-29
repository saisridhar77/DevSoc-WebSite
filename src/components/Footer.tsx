import React from 'react';
import { 
  Code2, 
  Github, 
  Linkedin, 
  Instagram,
  Mail,
  MapPin,
  Youtube
} from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Devsoc-BPGC', label: 'GitHub' },
    { icon: Linkedin, href: 'https://in.linkedin.com/company/devsoc-bpgc', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/devsocbitsgoa/?hl=en', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/channel/UCOYKNjQaifpxy5qG3as82ZA', label: 'YouTube' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Verticals', href: '#verticals' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#coordinators' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="contact" className="bg-gray-900 dark:bg-black text-white py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Code2 className="w-8 h-8 text-teal-600" />
              <span className="text-2xl font-bold">DEVSOC</span>
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

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-teal-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
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
        <div className="mt-12 pt-8 border-t border-gray-800 dark:border-gray-900 text-center">
          <p className="text-gray-400">
            Made with <span className="text-red-500">♥</span> by DevSoc
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
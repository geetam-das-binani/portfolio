import { Heart, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/geetam-das-binani', label: 'GitHub' },
   
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/geetam-das-binani-135670255/', label: 'LinkedIn' },
   
  ];

  return (
    <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="#home" 
              className="text-xl font-bold text-primary"
            >
              Portfolio<span className="text-secondary">.</span>
            </a>
            <p className="mt-2 text-muted max-w-md">
              Crafting engaging digital experiences and elegant solutions for the web.
            </p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted text-sm">
            © {currentYear}. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex items-center text-sm text-muted">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>by Geetam Das Binani</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
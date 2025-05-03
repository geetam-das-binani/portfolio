import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ExternalLink, Github } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"  // Changed to use a named easing function
      }
    }
  };

  return (
    <motion.div 
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        />
      </div>

      {/* Hero content */}
      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto"
        style={{ y, opacity }}
      >
        <motion.h2 
          className="text-lg sm:text-xl font-semibold text-muted mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hey there, I'm
        </motion.h2>

        <motion.h1 
          className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
         Geetam Das Binani
        </motion.h1>

        <motion.div
          className="text-xl sm:text-2xl font-medium mb-8 text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="block">Full Stack Developer</span>
          <span className="block mt-2">Crafting digital experiences that matter</span>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="#contact" className="btn-primary">
            Get In Touch
          </a>
          <a href="#projects" className="btn-outline">
            View My Work
          </a>
        </motion.div>

        <motion.div 
          className="flex justify-center mt-12 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <a 
            href="https://github.com/geetam-das-binani" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted hover:text-text transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/geetam-das-binani-135670255/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted hover:text-text transition-colors"
            aria-label="LinkedIn"
          >
            <ExternalLink size={24} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
      >
        <ArrowDown className="text-primary" size={24} />
      </motion.div>
    </motion.div>
  );
}
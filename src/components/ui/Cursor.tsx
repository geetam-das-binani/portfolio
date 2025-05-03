import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if it's a mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Only track mouse position on non-mobile devices
    if (!isMobile) {
      const mouseMove = (e: MouseEvent) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener('mousemove', mouseMove);

      // Add listeners for links and buttons
      const handleLinkEnter = () => setCursorVariant('link');
      const handleLinkLeave = () => setCursorVariant('default');

      const links = document.querySelectorAll('a, button');
      links.forEach((link) => {
        link.addEventListener('mouseenter', handleLinkEnter);
        link.addEventListener('mouseleave', handleLinkLeave);
      });

      return () => {
        window.removeEventListener('mousemove', mouseMove);
        window.removeEventListener('resize', checkMobile);
        links.forEach((link) => {
          link.removeEventListener('mouseenter', handleLinkEnter);
          link.removeEventListener('mouseleave', handleLinkLeave);
        });
      };
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      background: 'radial-gradient(circle, rgba(15, 118, 110, 0.3) 0%, rgba(15, 118, 110, 0.1) 70%)',
      mixBlendMode: 'normal',
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.6,
      },
    },
    link: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      background: 'radial-gradient(circle, rgba(234, 88, 12, 0.4) 0%, rgba(234, 88, 12, 0) 70%)',
      mixBlendMode: 'difference',
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.8,
      },
    },
  };

  // Don't render custom cursor on mobile
  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full"
        variants={variants}
        animate={cursorVariant}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-primary/30 blur-sm"
        variants={variants}
        animate={cursorVariant}
        transition={{
          delay: 0.03,
          type: 'spring',
          stiffness: 250,
          damping: 20,
          mass: 0.8,
        }}
      />
    </>
  );
}
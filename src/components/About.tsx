import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* About image */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/professional.jpeg"
                alt="Professional portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            {/* <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg">
              <div className="text-primary font-bold text-xl">5+</div>
              <div className="text-sm">Years of experience</div>
            </div> */}
          </motion.div>

          {/* About content */}
          <div>
            <motion.h2 
              variants={itemVariants}
              className="section-title"
            >
              About Me
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="mb-6 text-muted"
            >
              Hi, I'm Geetam Das Binani, a passionate full-stack developer experience in building web applications that solve real-world problems.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="mb-6 text-muted"
            >
              I specialize in creating engaging user experiences using modern technologies like React.js,Next.js, TypeScript, and Node.js. My approach combines technical expertise with a deep understanding of user needs to deliver solutions that are both beautiful and functional.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="mb-10 text-muted"
            >
              When I'm not coding, you can find me exploring new technologies. I believe in continuous learning and staying updated with the latest industry developments.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <p className="text-muted">B.S.C Economics Honours<br />Calcutta University</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-muted">India<br />Kolkata</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
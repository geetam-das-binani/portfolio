import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Database, 
  Layout, 
  Terminal, 
  LineChart, 
  Settings, 
  Cloud 
} from 'lucide-react';

const skills = [
  {
    category: 'Frontend Development',
    icon: <Layout className="w-6 h-6" />,
    items: [
      { name: 'React', level: 90 },
      { name: 'Angular', level: 50 },
      { name: 'Javascript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
 
  {
    category: 'Backend Development',
    icon: <Database className="w-6 h-6" />,
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'SQL', level: 50 },
      { name: 'Prisma ORM', level: 80 },
      { name: 'Supabase', level: 75 },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: <Terminal className="w-6 h-6" />,
    items: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 50 },
      { name: 'CI/CD', level: 70 },
      
    ],
  },
  {
    category: 'Cloud Services',
    icon: <Cloud />, 
    items: [
      { name: 'Render', level: 70 },
      { name: 'Netlify', level: 70 },
      { name: 'Vercel', level: 70 },
      
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 bg-gradient-to-br from-white/50 to-slate-100/50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-sm">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Skills
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-muted"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Here are the technologies and tools I work with on a daily basis.
            I'm constantly learning and expanding my skill set to stay current with industry trends.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={skillGroup.category}
              variants={itemVariants}
              className="card group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 text-primary group-hover:scale-110 transition-transform duration-300 mr-4">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {skillGroup.category}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted">{skill.level}%</span>
                      </div>
                      <div className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div 
                          className="skill-bar"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Code, Palette, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "HiCoder Pvt Ltd.",
    period: "2025 - Present",
    description:
      "Working as a Full Stack Developer using HTML and JavaScript on the frontend, and Node.js, Express, and MongoDB on the backend to build and maintain scalable web applications.",
    icon: <Code />,
  },
  {
    title: "Full Stack Developer Intern",
    company: "AutomatEazy",
    period: "2024 - 2024",
    description:
      "Contributed to full-stack development using Angular for the frontend, and Node.js with Express, SQL, and MongoDB for the backend to develop and enhance internal applications.",
    icon: <Briefcase />,
  },

  {
    title: "Web Development Certification",
    company: "Upgrad KnowledgeHut",
    period: "2024",
    description:
      "Completed an intensive web development bootcamp focusing on HTML, CSS, JavaScript,React.js ,Node.js,Express.js,Mongodb and responsive design principles.",
    icon: <Award />,
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-slate-50/50 to-white/50 dark:from-slate-900/50 dark:to-slate-800/50 backdrop-blur-sm"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2
            className="section-title mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Experience
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-muted"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A chronicle of my professional journey and key milestones that have
            shaped my career in technology.
          </motion.p>
        </div>

        <div ref={ref} className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5 }}
            style={{ originY: 0 }}
          />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="relative pl-8"
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                {/* Timeline dot with pulse effect */}
                <motion.div
                  className="timeline-dot"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                >
                  <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" />
                </motion.div>

                {/* Icon */}
                <div className="absolute -left-4 top-0 p-2 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-primary/20 rounded-full shadow-xl -translate-x-1/2 backdrop-blur-sm">
                  <div className="text-primary">{experience.icon}</div>
                </div>

                {/* Content */}
                <div className="card hover:scale-[1.02] transition-transform duration-300">
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {experience.title}
                      </h3>
                      <span className="px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-sm rounded-full mt-2 sm:mt-0">
                        {experience.period}
                      </span>
                    </div>
                    <div className="text-muted font-medium mb-3">
                      {experience.company}
                    </div>
                    <p className="text-muted">{experience.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

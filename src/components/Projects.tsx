import { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Resume Builder",
    description:
      "A full-featured online shopping platform with cart, payments, and order management.",
    image: "/resume.png",
    category: "web",
    tags: [
      "Next.js",
      "Neon Db",
      "Vercel Blob",
      "Stripe",
      "Clerk",
      "Tailwind CSS",
    ],
    demoUrl: "https://ai-resume-builder-pink.vercel.app/",
    githubUrl: "https://github.com/geetam-das-binani/ai-resume-builder",
  },
  {
    id: 2,
    title: "AI Finance Platform",
    description:
      "An AI-powered financial dashboard for tracking expenses, income, and generating insights.",
    image: "/finance.png",
    category: "web",
    tags: ["Next.js", "Clerk", "Prisma", "Tailwind CSS", "Supabase"],
    demoUrl: "https://ai-finance-six.vercel.app/",
    githubUrl: "https://github.com/geetam-das-binani/ai-finance",
  },
  {
    id: 3,
    title: "Calendly Clone",
    description:
      "A scheduling platform that allows users to book meetings and manage availability.",
    image: "/calendly.png",
    category: "web",
    tags: [
      "Next.js",
      "Prisma",
      "Nylas",
      "Tailwind CSS",
      "Next Auth",
      "Supabase",
    ],
    demoUrl: "https://calendly-tau-seven.vercel.app/",
    githubUrl: "https://github.com/geetam-das-binani/calendly",
  },
  {
    id: 4,
    title: "AI Cancer Care",
    description:
      "AI Cancer Care is an advanced platform that leverages AI to deliver personalized cancer treatment plans.",
    image: "/cancer.png",
    category: "web",
    tags: [
      "React.js",
      "Drizzle Orm",
      "Tailwind CSS",
      "Privy Auth",
      "Neon Db",
    ],
    demoUrl: "https://beat-cancer.onrender.com/",
    githubUrl: "https://github.com/geetam-das-binani/beat-cancer",
  },
  {
    id: 5,
    title: "Hotel Booking App",
    description:
      "A user-friendly hotel booking app with advanced filters, detailed listings,Stripe payments and seamless booking.",
    image: "/hotel.png",
    category: "web",
    tags: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Stripe"
    ],
    demoUrl: "https://mern-booking-app-fji3.onrender.com/",
    githubUrl: "https://github.com/geetam-das-binani/mern-booking-app",
  },

  {
    id: 6,
    title: "Job Portal",
    description:
      "A job portal that allows users to search for jobs and apply for them and allows employers to post jobs.",
    image: "/job.png",
    category: "web",
    tags: [
      "React.js",
      "Tailwind Css",
      "Supabase",
      "Clerk"
      
    ],
    demoUrl: "https://hired-q16g.vercel.app/",
    githubUrl: "https://github.com/geetam-das-binani/hired",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2
            className="section-title mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-muted"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A selection of my recent work across web applications.
          </motion.p>
        </div>

        {/* Projects grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                exit="exit"
                className="card overflow-hidden group"
              >
                <div className="relative overflow-hidden h-60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Overlay links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                      aria-label="View demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                        aria-label="View code on GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-2 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

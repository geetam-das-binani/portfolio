import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Check, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
   message: '',
  });
  
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    try {
      setFormStatus('submitting');
      
      // NOTE: Replace these with your actual EmailJS Service ID, Template ID, and Public Key
      // Add them to your environment variables in production
      await emailjs.sendForm(
       import.meta.env.VITE_EMAIL_SERVICE_ID, 
        import.meta.env.VITE_EMAIL_TEMPLATE_ID, 
        formRef.current, 
       import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );
      
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('error');
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }
  };

  const contactItems = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'geetambinani6@gmail.com',
      link: 'mailto:geetambinani6@gmail.com',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      content: '+91 9903711043',
      link: 'tel:+919903711043',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      content: 'Kolkata, India',
      link: 'https://maps.google.com/?q=Kolkata,+India',
    },
  ];

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
      },
    },
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-muted"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a project in mind or want to collaborate? Feel free to reach out through the form below or using my contact information.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Contact info cards */}
          <div className="lg:col-span-1 space-y-8">
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.title === 'Location' ? '_blank' : undefined}
                rel={item.title === 'Location' ? 'noopener noreferrer' : undefined}
                variants={itemVariants}
                className="card p-6 flex items-start hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-muted">{item.content}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact form */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2"
          >
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="card p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary"
                    
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary"
                   
                  />
                </div>
              </div>
              
             
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                
                />
              </div>
              
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="btn-primary w-full flex items-center justify-center"
              >
                {formStatus === 'idle' && (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
                {formStatus === 'submitting' && (
                  <>
                    Sending... <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                  </>
                )}
                {formStatus === 'success' && (
                  <>
                    Message Sent <Check className="ml-2 h-4 w-4" />
                  </>
                )}
                {formStatus === 'error' && 'Failed to send. Try again.'}
              </button>
              
              {formStatus === 'success' && (
                <p className="mt-4 text-center text-sm text-green-600 dark:text-green-400">
                  Thank you for your message! I'll get back to you soon.
                </p>
              )}
              {formStatus === 'error' && (
                <p className="mt-4 text-center text-sm text-red-600 dark:text-red-400">
                  Something went wrong. Please try again or contact me directly.
                </p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
"use client"
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import SectionHeader from '@/components/SectionHeader';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Get In Touch" 
          description="Have a project in mind or want to discuss opportunities? Send a note and I will get back to you." 
        />
          
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card/80 p-4 shadow-xl shadow-black/10 backdrop-blur md:p-6"
            >
              <ContactForm />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center rounded-2xl border border-border bg-card/80 p-4 shadow-xl shadow-black/10 backdrop-blur md:p-6"
            >
              <ContactInfo/>
            </motion.div>

          </div>
        </div>
    </section>
  );
}

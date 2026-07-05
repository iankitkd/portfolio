"use client"
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import SectionHeader from '@/components/SectionHeader';

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        {/* <div className="max-w-3xl mx-auto"> */}
        <SectionHeader 
          title="Get In Touch" 
          description="Have a project in mind or want to discuss opportunities? Feel free to reach out!" 
        />
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-background/30 rounded-2xl p-3 md:p-6 border border-border max-w-xl"
            >
              <ContactForm />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-background/30 rounded-2xl p-3 md:p-6 border border-border max-w-xl flex flex-col justify-center"
            >
              <ContactInfo/>
            </motion.div>

          </div>
        </div>
      {/* </div> */}
    </section>
  );
}
"use client"
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        {/* <div className="max-w-3xl mx-auto"> */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? Feel free to reach out!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gradient-accent-start to-gradient-accent-end mx-auto mt-4"></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-background/30 rounded-xl p-3 md:p-6 border border-border"
            >
              <ContactForm />
            </motion.div>

            <ContactInfo/>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}
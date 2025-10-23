'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Get In Touch
          </h2>
          <p className="text-center text-white/60 mb-16">
            Have a project in mind? Let's work together
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="glass p-3 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-white/60">your.email@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="glass p-3 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-white/60">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="glass p-3 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-white/60">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 glass glow p-6 rounded-2xl">
                <h4 className="font-semibold mb-4">Working Hours</h4>
                <div className="space-y-2 text-white/60">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Weekend: By Appointment</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full glass px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-all bg-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full glass px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-all bg-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full glass px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none bg-transparent"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full glass glass-hover px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </motion.button>
              </form>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-20 text-center glass glow p-8 rounded-2xl"
          >
            <p className="text-white/60 mb-4">
              Prefer to connect on social media?
            </p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                LinkedIn
              </a>
              <span className="text-white/30">•</span>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                GitHub
              </a>
              <span className="text-white/30">•</span>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

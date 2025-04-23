"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just show a success message
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-lg font-medium text-accent mb-3">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="cosmic-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to chat? Send me a message and let's create something amazing together.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="flex space-x-4 items-start">
              <div className="cosmic-gradient p-3 rounded-full">
                <MailIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">parthkhandelwal0077@gmail.com</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex space-x-4 items-start">
              <div className="cosmic-gradient p-3 rounded-full">
                <PhoneIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">+91 6396004298</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex space-x-4 items-start">
              <div className="cosmic-gradient p-3 rounded-full">
                <MapPinIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">India</p>
              </div>
            </motion.div>
          </div>

          <motion.form 
            variants={itemVariants} 
            onSubmit={handleSubmit}
            className="cosmic-border bg-card/50 backdrop-blur-sm p-8 rounded-xl md:col-span-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  required
                  className="bg-background/50 border-border"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="bg-background/50 border-border"
                />
              </div>
            </div>
            <div className="space-y-2 mb-6">
              <label htmlFor="subject" className="block text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="Project Inquiry"
                required
                className="bg-background/50 border-border"
              />
            </div>
            <div className="space-y-2 mb-6">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
                className="bg-background/50 border-border"
              />
            </div>
            <motion.div 
              className="text-right"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button type="submit" className="cosmic-gradient px-8 py-2 h-auto">
                Send Message
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
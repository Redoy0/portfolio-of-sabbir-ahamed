// components
import Circles from "../../components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

// emailjs
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Debug: Check if environment variables are loaded
    console.log('EmailJS Config:', {
      SERVICE_ID: SERVICE_ID ? 'Set' : 'Missing',
      TEMPLATE_ID: TEMPLATE_ID ? 'Set' : 'Missing',
      PUBLIC_KEY: PUBLIC_KEY ? 'Set' : 'Missing'
    });

    // Check if all required environment variables are present
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('Missing EmailJS configuration. Please check your .env.local file.');
      setStatus('config_error');
      setIsLoading(false);
      return;
    }

    // Create a temporary input for recipient email
    const recipientInput = document.createElement('input');
    recipientInput.type = 'hidden';
    recipientInput.name = 'to_email';
    recipientInput.value = 'sabbirahamed.cse@gmail.com';
    form.current.appendChild(recipientInput);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setStatus('success');
        setIsLoading(false);
        form.current.reset();
        // Remove the temporary input
        if (recipientInput.parentNode) {
          recipientInput.parentNode.removeChild(recipientInput);
        }
      }, (error) => {
        console.log('FAILED...', error.text);
        setStatus('error');
        setIsLoading(false);
        // Remove the temporary input
        if (recipientInput.parentNode) {
          recipientInput.parentNode.removeChild(recipientInput);
        }
      });
  };

  return <div className='h-full bg-primary/30'>
    <Circles />
    <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
      {/* text & form */}
      <div className="flex flex-col w-full max-w-[700px]">
        {/* text */}
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 text-center mb-12">
          Let's <span className="text-accent">connect. </span>
        </motion.h2>

        {/* Status Messages */}
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
            ✅ Message sent successfully! I'll get back to you soon.
          </motion.div>
        )}
        
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center">
            ❌ Failed to send message. Please try again.
          </motion.div>
        )}

        {status === 'config_error' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-yellow-500/20 border border-yellow-500/50 rounded-lg text-yellow-400 text-center">
            ⚠️ Email configuration missing. Please set up EmailJS credentials.
          </motion.div>
        )}

        {/* form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1 flex flex-col gap-6 w-full mx-auto">
          
          {/* input group */}
          <div className="flex gap-x-6 w-full">
            <input
              type="text"
              name="user_name"
              placeholder="name"
              className="input"
              autoCapitalize="off"
              autoComplete="name"
              required />
            <input
              type="email"
              name="user_email"
              placeholder="email"
              className="input"
              autoCapitalize="off"
              autoComplete="email"
              required />
          </div>
          
          <input
            type="text"
            name="subject"
            placeholder="subject"
            className="input"
            autoCapitalize="off"
            autoComplete="off"
            required />
          
          <textarea 
            name="message"
            placeholder="message" 
            className="textarea"
            autoCapitalize="off"
            autoComplete="off"
            required></textarea>
          
          <button 
            type="submit"
            disabled={isLoading}
            className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group disabled:opacity-50 disabled:cursor-not-allowed">
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
              {isLoading ? 'Sending...' : "Let's talk"}
            </span>
            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
          </button>
        </motion.form>
      </div>
    </div>
  </div>;
};

export default Contact;

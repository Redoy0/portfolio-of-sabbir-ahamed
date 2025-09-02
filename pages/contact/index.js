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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    // EmailJS configuration
    const serviceId = 'service_portfolio'; // You'll need to replace this
    const templateId = 'template_portfolio'; // You'll need to replace this
    const publicKey = 'q1FugPxOI_BtSoljT'; // You'll need to replace this

    // Template parameters
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'sabbir.cse@gmail.com'
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
        setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
      })
      .catch((error) => {
        console.error('Email sending failed:', error.text);
        setStatus('error');
        setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return <div className='h-full bg-primary/30'>
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
        {/* form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1 flex flex-col gap-6 w-full mx-auto">

          {/* Status Messages */}
          {status === 'success' && (
            <div className="bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-2 rounded-lg text-center">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-2 rounded-lg text-center">
              Failed to send message. Please try again or contact me directly.
            </div>
          )}

          {/* input group */}
          <div className="flex gap-x-6 w-full">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="name"
              className="input"
              required
              disabled={isLoading} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email"
              className="input"
              required
              disabled={isLoading} />
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="subject"
            className="input"
            required
            disabled={isLoading} />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="message"
            className="textarea"
            required
            disabled={isLoading}>
          </textarea>
          <button
            type="submit"
            disabled={isLoading}
            className={`btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}>
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

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { BsArrowRight } from 'react-icons/bs';
import { HiEnvelope, HiMapPin } from 'react-icons/hi2';

import Section from '@/components/ui/Section';
import Socials from '@/components/layout/Socials';
import { profile } from '@/data/profile';
import { fadeIn } from '@/lib/variants';

// EmailJS configuration
const serviceId = 'service_portfolio';
const templateId = 'template_contact';
const publicKey = 'q1FugPxOI_BtSoljT';

const emptyForm = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    const templateParams = { ...formData, to_email: profile.email };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus('success');
        setFormData(emptyForm);
      })
      .catch((error) => {
        console.error('Email sending failed:', error?.text);
        setStatus('error');
      })
      .finally(() => {
        setIsLoading(false);
        setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    <Section id='contact' className='bg-primary/30 pb-32 xl:pb-28'>
      <div className='flex flex-col xl:flex-row gap-12 xl:gap-16'>
        {/* text */}
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.3 }}
          className='xl:w-[40%] text-center xl:text-left'
        >
          <p className='text-accent uppercase tracking-[4px] text-xs md:text-sm font-semibold mb-3'>Contact</p>
          <h2 className='h2'>
            Let&rsquo;s <span className='text-accent'>connect.</span>
          </h2>
          <p className='max-w-[480px] mx-auto xl:mx-0 mb-8 text-white/80 text-sm sm:text-base'>
            Have a question, a project, or an opportunity? Fill out the form and I&rsquo;ll get back within 24-48 hours, or
            email me directly.
          </p>
          <div className='flex flex-col items-center xl:items-start gap-4 mb-8 text-sm sm:text-base'>
            <a href={`mailto:${profile.email}`} className='flex items-center gap-3 hover:text-accent transition-colors'>
              <HiEnvelope className='text-accent text-xl' /> {profile.email}
            </a>
            <span className='flex items-center gap-3'>
              <HiMapPin className='text-accent text-xl' /> {profile.location}
            </span>
          </div>
          <Socials className='justify-center xl:justify-start text-2xl' />
        </motion.div>

        {/* form */}
        <motion.form
          onSubmit={sendEmail}
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.2 }}
          className='flex-1 flex flex-col gap-6 w-full max-w-[700px] mx-auto'
        >
          {status === 'success' && (
            <div className='bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-2 rounded-lg text-center'>
              Message sent successfully! I&rsquo;ll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className='bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-2 rounded-lg text-center'>
              Failed to send message. Please try again or contact me directly.
            </div>
          )}

          <div className='flex flex-col sm:flex-row gap-6 w-full'>
            <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='name' aria-label='Name' className='input' required disabled={isLoading} />
            <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='email' aria-label='Email' className='input' required disabled={isLoading} />
          </div>
          <input type='text' name='subject' value={formData.subject} onChange={handleChange} placeholder='subject' aria-label='Subject' className='input' required disabled={isLoading} />
          <textarea name='message' value={formData.message} onChange={handleChange} placeholder='message' aria-label='Message' className='textarea' required disabled={isLoading}></textarea>
          <button
            type='submit'
            disabled={isLoading}
            className={`btn relative rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group self-center xl:self-start ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
              {isLoading ? 'Sending...' : "Let's talk"}
            </span>
            <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
          </button>
        </motion.form>
      </div>
    </Section>
  );
};

export default Contact;

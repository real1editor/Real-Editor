import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Field({children}){ return <div className="mb-3">{children}</div> }

export default function RegisterForm(){
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  function validate(data){
    const e = {};
    if(!data.name || data.name.trim().length < 2) e.name = 'Please enter your name';
    if(!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) e.email = 'Please enter a valid email';
    if(!data.service) e.service = 'Select a service';
    // honeypot
    if(data.website) e.honeypot = 'Spam detected';
    return e;
  }

  async function handleSubmit(e){
    e.preventDefault();
    setSuccess('');
    setErrors({});
    const formData = Object.fromEntries(new FormData(e.target).entries());
    const validation = validate(formData);
    if(Object.keys(validation).length){
      setErrors(validation);
      return;
    }
    setLoading(true);
    try{
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const j = await res.json();
      if(res.ok && j.ok){
        setSuccess('Registration sent — we will contact you soon.');
        e.target.reset();
      } else {
        setErrors({ server: j.error || 'Server error' });
      }
    } catch(err){
      setErrors({ server: 'Network error' });
    } finally { setLoading(false); }
  }

  return (
    <section className="bg-gradient-to-b from-white/2 to-transparent p-5 rounded-2xl border border-white/6">
      <h2 className="text-lg font-semibold">📋 Register a Project</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <Field>
          <motion.input whileFocus={{ scale:1.01 }} name="name" placeholder="Full name" className="w-full p-3 rounded-lg bg-transparent border border-white/6" />
          {errors.name && <div className="text-xs text-red-400 mt-1">{errors.name}</div>}
        </Field>

        <Field>
          <motion.input whileFocus={{ scale:1.01 }} name="email" type="email" placeholder="Email" className="w-full p-3 rounded-lg bg-transparent border border-white/6" />
          {errors.email && <div className="text-xs text-red-400 mt-1">{errors.email}</div>}
        </Field>

        <Field>
          <motion.input whileFocus={{ scale:1.01 }} name="phone" placeholder="Phone (+251...)" className="w-full p-3 rounded-lg bg-transparent border border-white/6" />
        </Field>

        <Field>
          <motion.select whileFocus={{ scale:1.01 }} name="service" className="w-full p-3 rounded-lg bg-transparent border border-white/6">
            <option value="">Select service</option>
            <option value="youtube">YouTube Editing</option>
            <option value="shorts">Short-Form (TikTok/Reels)</option>
            <option value="motion">Motion Graphics</option>
          </motion.select>
          {errors.service && <div className="text-xs text-red-400 mt-1">{errors.service}</div>}
        </Field>

        <Field>
          <motion.textarea whileFocus={{ scale:1.01 }} name="notes" placeholder="Project details (brief)" className="w-full p-3 rounded-lg bg-transparent border border-white/6 min-h-[90px]" />
        </Field>

        {/* Honeypot input - hidden from users but bots may fill it */}
        <input name="website" type="text" style={{display:'none'}} />

        {errors.honeypot && <div className="text-xs text-red-400">{errors.honeypot}</div>}
        {errors.server && <div className="text-xs text-red-400 mb-2">{errors.server}</div>}
        {success && <div className="text-xs text-green-400 mb-2">{success}</div>}

        <div className="flex items-center gap-3">

        <button type="submit" disabled={loading} className="px-4 py-2 rounded-lg bg-cinematic-accent text-white">
            {loading ? <span className="inline-block animate-spin w-4 h-4 border-2 border-white/60 border-t-transparent rounded-full" /> : 'Submit Registration'}
          </button>
          <div className="text-sm text-cinematic-700">We will contact you within 24 hours.</div>
        </div>
      </form>
    </section>
  );
}

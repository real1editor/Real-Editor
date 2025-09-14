import React from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import RegisterForm from './components/RegisterForm';
import FeedbackForm from './components/FeedbackForm';
import Testimonials from './components/Testimonials';
import ChatWidget from './components/ChatWidget';

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-cinematic-900 to-cinematic-800 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        <main className="space-y-6 mt-6">
          <Portfolio />
          <Services />
          <RegisterForm />
          <FeedbackForm />
          <Testimonials />
        </main>
      </div>
      <ChatWidget />
    </div>
  );
}

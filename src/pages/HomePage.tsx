import React, { lazy, Suspense, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

// Lazy loaded components
const Journey = lazy(() => import('../components/Journey'));
const Projects = lazy(() => import('../components/Projects'));
const FAQs = lazy(() => import('../components/FAQs'));

function HomePage() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  // Handle scroll from /#hash
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Home | Vausly Media</title>
        <meta name="description" content="Home" />
        <meta
          name="keywords"
          content="vausly, digital creator, media, blog, projects, donate"
        />
        <meta name="author" content="Vausly Media" />
      </Helmet>
      
        {/* Hero */}
        <motion.section
          id="home"
          className="min-h-[90vh] flex items-center justify-center relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-[url('/images/home_bg.png')] bg-cover bg-center opacity-20" />
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              DIGITAL CREATOR
            </h1>
            <p className="mt-4 text-lg md:text-xl text-purple-300 tracking-widest">
              SINCE 2017
            </p>
          </div>
        </motion.section>

        {/* About */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-8 rounded-2xl">
              <h2 className="text-4xl md:text-6xl font-bold">ABOUT ME</h2>
            </div>
            <div className="space-y-6 text-lg">
              <p>
                Hello, I am the admin of Vausly Media. Vausly is my digital
                identity.
              </p>
              <p>
                I write articles about internet culture, technology, history,
                tutorials, games, and personal experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 bg-black/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              My Digital Projects
            </h2>
            <Suspense fallback={<div>Loading projects...</div>}>
              <Projects />
            </Suspense>
            <a href="/projects" className="inline-block mt-8 underline">
              Click here for more Projects
            </a>
          </div>
        </section>

        {/* Journey */}
        <section id="journey" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">My Journey</h2>
            <Suspense fallback={<div>Loading journey...</div>}>
              <Journey />
            </Suspense>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="py-20 bg-black/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Random Questions
            </h2>
            <Suspense fallback={<div>Loading FAQs...</div>}>
              <FAQs />
            </Suspense>
            <a href="/faq" className="inline-block mt-8 underline">
              Click here for more FAQs
            </a>
          </div>
        </section>

        {/* Social */}
        <section id="social" className="py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Let's Connect</h2>
          <a
            href="https://link.vausly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-bold"
          >
            Find Me Here
          </a>
        </section>
      
    </>
  );
}

export default HomePage;

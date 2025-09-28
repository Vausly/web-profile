import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// import ContactPage from '../pages/contact';
// import DonatePage from '../pages/donate';
// import CopyrightPage from '../pages/copyright';
// import Layout from '../Layout';

// Lazy loaded components
const Journey = lazy(() => import('../components/Journey'));
const Projects = lazy(() => import('../components/Projects'));
const FAQs = lazy(() => import('../components/FAQs'));

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Smooth scroll to section
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <>
    <Helmet>
      <title>Home | Vausly Media</title>
      <meta
        name="description"
        content="Home"
      />
      <meta
        name="keywords"
        content="vausly, digital creator, media, blog, projects, donate"
      />
      <meta name="author" content="Vausly Media" />
    </Helmet>

    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 text-white">
      {/* Navigation */}
      <motion.nav 
        className="fixed w-full bg-black/20 backdrop-blur-sm z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
              <span className="font-bold">VAUSLY MEDIA</span>
            </motion.div>
            
            {/* Mobile Menu Button */}
            <motion.button 
              className="lg:hidden text-white hover:text-purple-400 transition"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-6">
              <motion.a whileHover={{ scale: 1.1 }} href="#home" onClick={(e) => scrollToSection(e, '#home')} className="hover:text-purple-400 transition">Home</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-purple-400 transition">About</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#projects" onClick={(e) => scrollToSection(e, '#projects')} className="hover:text-purple-400 transition">Projects</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="/story" rel="noopener noreferrer" className="hover:text-purple-400 transition">Story</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="/achievements"  rel="noopener noreferrer" className="hover:text-purple-400 transition">Achievement</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#faqs" onClick={(e) => scrollToSection(e, '#faqs')} className="hover:text-purple-400 transition">FAQs</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="https://minecraft.vausly.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">Minecraft</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#social" onClick={(e) => scrollToSection(e, '#social')} className="hover:text-purple-400 transition">Social</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="https://www.vausly.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">Blog</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="/portfolio" rel="noopener noreferrer" className="hover:text-purple-400 transition">Portfolio</motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="/donate" rel="noopener noreferrer" className="hover:text-purple-400 transition">Support</motion.a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden"
              >
                <motion.div 
                  className="flex flex-col gap-4 py-4"
                  variants={{
                    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
                    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                  }}
                >
                  <motion.a whileTap={{ scale: 0.95 }} href="/#home" onClick={(e) => scrollToSection(e, '#home')} className="hover:text-purple-400 transition">Home</motion.a>
                  <motion.a whileTap={{ scale: 0.95 }} href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-purple-400 transition">About</motion.a>
                  <motion.a whileTap={{ scale: 0.95 }} href="#projects" onClick={(e) => scrollToSection(e, '#projects')} className="hover:text-purple-400 transition">Projects</motion.a>
                  <motion.a whileTap={{ scale: 0.95 }} href="/story" rel="noopener noreferrer" className="hover:text-purple-400 transition">Story</motion.a>
                  <motion.a whileTap={{ scale: 0.95 }} href="/achievements" rel="noopener noreferrer" className="hover:text-purple-400 transition">Achievements</motion.a>
                  <motion.a whileTap={{ scale: 0.95 }} href="/#faqs" onClick={(e) => scrollToSection(e, '#faqs')} className="hover:text-purple-400 transition">About</motion.a>
                  <motion.a whileTap={{ scale: 0.95 }} href="https://minecraft.vausly.com" onClick={(e) => scrollToSection(e, '#social')} className="hover:text-purple-400 transition">Minecraft Rel</motion.a>
                  <motion.a whileTap={{ scale: 0.95 }} href="#social" onClick={(e) => scrollToSection(e, '#social')} className="hover:text-purple-400 transition">Social</motion.a>
                  <motion.a whileTap={{ scale: 0.95 }} href="https://www.vausly.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">Blog</motion.a>
                  <motion.a whileTap={{ scale: 0.95 }} href="/portfolio" rel="noopener noreferrer" className="hover:text-purple-400 transition">Portfolio</motion.a>
                  <motion.a whileTap={{ scale: 0.95 }} href="/donate" rel="noopener noreferrer" className="hover:text-purple-400 transition">Support</motion.a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[url('/images/home_bg.png')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            className="text-4xl md:text-7xl font-bold tracking-wider mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            DIGITAL CREATOR
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl tracking-widest text-purple-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            SINCE 2017
          </motion.p>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-8 rounded-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">ABOUT ME</h2>
            </div>
            <div className="space-y-6 text-lg">
              <p>Hello, I am the admin of Vausly Media. Vausly is my digital identity. I really enjoy writing articles about anything I like such as the internet world, internet culture, computer technology, history, or anything related to that.</p>
              <p>I also write articles about tutorials and also information about games. Sometimes I also share my real-life stories or experiences that I think are meaningful or difficult to forget.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20 bg-black/20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Digital Projects</h2>
          <Suspense fallback={<div>Loading projects...</div>}>
            <Projects />
          </Suspense>
          <p className="flex flex-col items-center ">‎ </p>
        <center><p className=" flex flex-col items-center"><a href="/projects" target="_blank" rel="noopener noreferrer">Click here for more Projects</a></p></center>
      
        </div>
      </motion.section>

      {/* Journey Section */}
      <motion.section
        id="journey"
        className="py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Journey</h2>
          <Suspense fallback={<div>Loading journey...</div>}>
            <Journey />
          </Suspense>
        </div>
      </motion.section>

      {/* FAQs Section */}
      <motion.section
        id="faqs"
        className="py-20 bg-black/20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Random Questions</h2>
          <Suspense fallback={<div>Loading FAQs...</div>}>
            <FAQs />
          </Suspense>
        </div>
        <p className="flex flex-col items-center ">‎ </p>
        <center><p className=" flex flex-col items-center"><a href="/faq" target="_blank" rel="noopener noreferrer">Click here for more FAQs</a></p></center>
      </motion.section>

      {/* Let's Connect Section */}
      <motion.section
        id="social"
        className="py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Let's Connect</h2>
          <motion.a
            href="https://link.vausly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-bold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Find Me Here
          </motion.a>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 bg-black/40 text-center">
        <p className="text-sm">
          Copyright © 2017-{currentYear} | Page developed by{' '}
          <a href="https://www.vausly.com" className="text-purple-400 hover:text-purple-300 transition">
            Vausly Media
          </a>
        </p>
      </footer>
    </div>
  </>
  );

}

export default HomePage;
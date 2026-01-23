import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollOrNavigate = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
      if (!hash.startsWith('#')) return;

      e.preventDefault();

      if (location.pathname === '/') {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/' + hash);
      }
      closeMenu();
    };

  return (
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
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
            <span className="font-bold">VAUSLY MEDIA</span>
          </motion.div>

          <motion.button
            className="lg:hidden text-white hover:text-purple-400 transition"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>

          <div className="hidden lg:flex gap-6">
            <motion.a whileHover={{ scale: 1.1 }} href="/#home" onClick={(e) => scrollOrNavigate(e, '#home')} className="hover:text-purple-400 transition">Home</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="/#about" onClick={(e) => scrollOrNavigate(e, '#about')} className="hover:text-purple-400 transition">About</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="/#projects" onClick={(e) => scrollOrNavigate(e, '#projects')} className="hover:text-purple-400 transition">Projects</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="/story" rel="noopener noreferrer" className="hover:text-purple-400 transition">Story</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="/achievements" rel="noopener noreferrer" className="hover:text-purple-400 transition">Achievement</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="/faq" rel="noopener noreferrer" className="hover:text-purple-400 transition">FAQs</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="https://minecraft.vausly.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">Minecraft</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="https://link.vausly.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">Social</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="https://www.vausly.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">Blog</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="/portfolio" rel="noopener noreferrer" className="hover:text-purple-400 transition">Portfolio</motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="/donate" rel="noopener noreferrer" className="hover:text-purple-400 transition">Support</motion.a>
            
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <motion.div className="flex flex-col gap-4 py-4">
                <motion.a whileHover={{ scale: 0.95 }} href="#home" onClick={(e) => scrollOrNavigate(e, '#home')} className="hover:text-purple-400 transition">Home</motion.a>
                <motion.a whileHover={{ scale: 0.95 }} href="#about" onClick={(e) => scrollOrNavigate(e, '#about')} className="hover:text-purple-400 transition">About</motion.a>
                <motion.a whileHover={{ scale: 0.95 }} href="#projects" onClick={(e) => scrollOrNavigate(e, '#projects')} className="hover:text-purple-400 transition">Projects</motion.a>
                <motion.a whileHover={{ scale: 0.95 }} href="/story" rel="noopener noreferrer" className="hover:text-purple-400 transition">Story</motion.a>
                <motion.a whileHover={{ scale: 0.95 }} href="/achievements" rel="noopener noreferrer" className="hover:text-purple-400 transition">Achievement</motion.a>
                <motion.a whileHover={{ scale: 0.95 }} href="/faq" rel="noopener noreferrer" className="hover:text-purple-400 transition">FAQs</motion.a>
                <motion.a whileHover={{ scale: 0.95 }} href="https://minecraft.vausly.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">Minecraft Rel</motion.a>
                <motion.a whileHover={{ scale: 0.95 }} href="https://link.vausly.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">Social</motion.a>
                <motion.a whileHover={{ scale: 0.95 }} href="https://www.vausly.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">Blog</motion.a>
                <motion.a whileHover={{ scale: 0.95 }} href="/portfolio" rel="noopener noreferrer" className="hover:text-purple-400 transition">Portfolio</motion.a>
                <motion.a whileHover={{ scale: 0.95 }} href="/donate" rel="noopener noreferrer" className="hover:text-purple-400 transition">Support</motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Header;

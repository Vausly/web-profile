import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Layout from './Layout';

import HomePage from './pages/HomePage';
import ContactPage from './pages/contact';
import DonatePage from './pages/donate';
import CopyrightPage from './pages/copyright';
import NotFoundPage from './pages/NotFoundPage';
import TOS from './pages/terms';
import FaqPage from './pages/faq';
import PortfolioPage from './pages/portfolio';
import ProjectsPage from './pages/projects';
import Story from './pages/story';
import Achievements from './pages/achievements';
import MCSkins from './pages/minecraft-skins';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {/* Layout Wrapper */}
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/copyright" element={<CopyrightPage />} />
            <Route path="/terms" element={<TOS />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/story" element={<Story />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/minecraft-skins" element={<MCSkins />} />
          </Route>
          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;

import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import Pagination from '../components/pagination';
import { AnimatePresence, motion } from 'framer-motion';
import { AchievementData } from '../data/achievementLists';

const Achievements = () => {
    const ITEMS_PER_PAGE = 10;
    const [currentPage, setCurrentPage] = useState(1);
  
    const totalPages = Math.ceil(AchievementData.length / ITEMS_PER_PAGE);
    const currentProjects = AchievementData.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
  
    return (
      <PageWrapper title="Achievements | Vausly Media">
        <div className="py-20 px-4 min-h-screen flex flex-col items-center justify-center">
          <div className="max-w-3xl w-full bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-none">
            <h1 className="text-3xl font-bold text-center mb-6">Achievement lists history</h1>
            <p className="mb-10 text-lg text-purple-200 text-center">
              Here is a list of my achievements so far!
            </p>
  
            {/* Animate Presence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {currentProjects.map((project, index) => (
                  <div
                    key={`${project.title}-${index}`}
                    className="bg-black/30 p-5 rounded-lg border border-white/20"
                  >
                    <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
                    <p className="text-sm text-white/90">
                      {project.description}{" "}
                      {project.links &&
                        project.links.map((link, i) => (
                          <span key={i}>
                            {i > 0 && ", "}
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-400 underline hover:text-purple-300"
                            >
                              {link.label}
                            </a>
                          </span>
                        ))}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
  
            {/* Pagination */}
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </PageWrapper>
    );
  };
  
  export default Achievements;
  
import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion, AnimatePresence } from 'framer-motion';

const DonatePage = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(prev => (prev === name ? null : name));
  };

  const buttonClass =
    'w-full max-w-md px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl';

  const dropdownVariant = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
    exit: { opacity: 0, height: 0 },
  };

  return (
    <PageWrapper
      title="Support | Vausly Media"
      description="Support Vausly Media and help us grow. Your donations help our lo journey alive."
      keywords="donate, support vausly media, contribute, help vausly"
    >
      <div className="max-w-3xl mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Support Our Project</h1>
        <p className="mb-10 text-lg text-purple-200">
          If you love what we're doing, consider donating to keep us going. Your support helps a lot!
        </p>
        <p className="mb-10 text-sm text-gray-100">Note: I am only available on the following platforms. Other than the list below is not me!</p>

        {/* Saweria */}
        <div className="mb-6 flex flex-col items-center">
          <motion.button
            onClick={() => toggleDropdown('saweria')}
            className={buttonClass}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Donate via Saweria
          </motion.button>
          <AnimatePresence>
            {openDropdown === 'saweria' && (
              <motion.div
                variants={dropdownVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="mt-2 px-6 py-4 bg-black/30 rounded-xl text-white text-sm max-w-md w-full"
              >
                <p>Saweria is the fastest way to send support via e-wallets, GoPay, OVO, DANA, and more.</p>
                <a
                  href="https://saweria.co/vausly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-white"
                >
                  Go to Saweria
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Trakteer */}
        <div className="mb-6 flex flex-col items-center">
          <motion.button
            onClick={() => toggleDropdown('trakteer')}
            className={buttonClass}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Support via Trakteer
          </motion.button>
          <AnimatePresence>
            {openDropdown === 'trakteer' && (
              <motion.div
                variants={dropdownVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="mt-2 px-6 py-4 bg-black/30 rounded-xl text-white text-sm max-w-md w-full"
              >
                <p>Trakteer is a great way to send tips for content creators using local payment options.</p>
                <a
                  href="https://trakteer.id/vausly/tip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-white"
                >
                  Go to Trakteer
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* PayPal */}
        <div className="mb-6 flex flex-col items-center">
          <motion.button
            onClick={() => toggleDropdown('bmc')}
            className={buttonClass}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            PayPal (recommended)
          </motion.button>
          <AnimatePresence>
            {openDropdown === 'bmc' && (
              <motion.div
                variants={dropdownVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="mt-2 px-6 py-4 bg-black/30 rounded-xl text-white text-sm max-w-md w-full"
              >
                <p>PayPal is a global platform to support creators with simple donations.</p>
                <a
                  href="https://paypal.me/vauslyx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-white"
                >
                  Go to PayPal
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Crypto */}
        <div className="mb-6 flex flex-col items-center">
          <motion.button
            onClick={() => toggleDropdown('crypto')}
            className={buttonClass}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Tip using Crypto
          </motion.button>
          <AnimatePresence>
            {openDropdown === 'crypto' && (
              <motion.div
                variants={dropdownVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="mt-2 px-6 py-4 bg-black/30 rounded-xl text-white text-sm max-w-md w-full"
              >
                <p>Support by using crypto, like Solana, Bitcoin, or Ethereum.</p>
                <a
                  href="https://vausly.net/cryptotip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-white"
                >
                  Support with crypto
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageWrapper>
  );
};

export default DonatePage;

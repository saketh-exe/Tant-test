import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Word = () => {
  const text = [['T','a','n','t','r','o','t','s','a','v'],
    ['తం','త్రో','త్స','వం'],
    ['த','ந்','தி','ரோ','த்','ச','வ்'],
    ['ത','ന്ത്രോ','ത്സ' ,'വം'],
    ['तं','त्रो','त्स','व']];
  //const texts = ['Tantrotsav', 'తంత్రోత్సవం', 'தந்திரோத்சவ்', 'തന്ത്രോത്സവം','तंत्रोत्सव'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 4000); // Change text every 4 seconds (to give time for letter animation)

    return () => clearInterval(interval);
  }, [text.length]);

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    
      <div style={{  overflow: 'hidden', textAlign: 'center', fontSize: '2rem',width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',flexWrap: 'nowrap',flexDirection: 'column'}}>
        <span>Welcome to </span>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            style={{ display: 'flex', justifyContent: 'center', gap: '1px' }}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {[...text[currentIndex]].map((letter, index) => (
              <motion.span
                key={`${currentIndex}-${index}`}
                variants={textVariants}
                transition={{ duration: 1 , type: 'spring'}}
               
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
        <span>2025</span>
      </div>
    
  );
};

export default Word;

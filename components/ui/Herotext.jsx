import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Herotext() {
  const text = [
    ["T", "A", "N", "T", "R", "O", "T", "S", "A", "V"],
    ["तं", "त्रो", "त्स", "व"],
    ["తం", "త్రో", "త్స", "వం"],
    ["த", "ந்", "தி", "ரோ", "த்", "ச", "வ்" ],
    ["ത", "ന്ത്രോ", "ത്സ", "വം" ],
    ["탄", "트", "로", "츠", "바" ],
    ["タ", "ン", "ト", "ロ", "ツ", "バ" ],
    ["坦", "特", "罗", "茨", "瓦" ],
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, [text.length]);

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div
      className="main"
      style={{
        userSelect: "none",
        // zIndex: 2,
        // position: "fixed",
        width: "100%",
        
        textAlign: "center",
        fontSize: "8rem",
        fontWeight: "900",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexDirection: "column",
      }}
    >
      <span className="font-medium text-6xl mb-4 text-yellow-100">Welcome to </span>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          style={{ display: "flex", justifyContent: "center", gap: "1px" }}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {[...text[currentIndex]].map((letter, index) => (
            <motion.span
              key={`${currentIndex}-${index}`}
              variants={textVariants}
              transition={{ duration: 1, type: "spring" }}
              style={{textShadow: "0 0 20px wheat",color: "white"}}
              className="herotxt"
            >
              {letter+(index === text[currentIndex].length - 1 ? " '25" : "")}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

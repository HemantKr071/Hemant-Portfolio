"use client"; // Ensure this runs on the client side

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AnimatedText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const typingSpeed = 270; // Time between typing each character (ms)
  const deletingSpeed = 170; // Time between deleting each character (ms)

  useEffect(() => {
    let typingTimeout;
    let deletingTimeout;

    // Type and delete effect logic
    const typeAndDelete = () => {
      if (!isDeleting) {
        // Typing Effect
        if (displayedText.length < text.length) {
          typingTimeout = setTimeout(() => {
            setDisplayedText((prevText) => prevText + text[displayedText.length]);
          }, typingSpeed);
        } else {
          setIsDeleting(true);
        }
      } else {
        // Deleting Effect
        if (displayedText.length > 0) {
          deletingTimeout = setTimeout(() => {
            setDisplayedText((prevText) => prevText.slice(0, prevText.length - 1));
          }, deletingSpeed);
        } else {
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % text.length); // Infinite repeat
        }
      }
    };

    typeAndDelete();

    // Blinking cursor effect
    const cursorTimeout = setInterval(() => {
      setCursorVisible((prevVisible) => !prevVisible);
    }, 500);

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(deletingTimeout);
      clearInterval(cursorTimeout);
    };
  }, [displayedText, isDeleting, text]);

  return (
    <div className="relative inline-block">
      <motion.h1
        id="typewriter"
        className="md:text-7xl text-5xl font-bold md:inline-block overflow-hidden whitespace-nowrap"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          },
        }}
      >
        {displayedText}
        {/* Cursor */}
        <motion.span
          className={`absolute top-0 left-[calc(100%+2px)] h-full w-[2px] bg-accent-hover ${cursorVisible ? "opacity-100" : "opacity-0"}`}
          transition={{ duration: 0.3 }}
        />
      </motion.h1>
    </div>
  );
};

export default AnimatedText;

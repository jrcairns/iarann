"use client";

import { useEffect, useState } from "react";

export function WordRotate() {
  const words = ['entrepreneurs.', 'business owners.', 'high net worth individuals.', 'innovators.', 'tech professionals.', 'attorneys.', 'retirees.'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isCursorBlinking, setIsCursorBlinking] = useState(true);

  // --- Typing Animation useEffect ---
  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (text.length < currentWord.length) {
          setText(currentWord.slice(0, text.length + 1));
          setTypingSpeed(120 + Math.random() * 60); // More random typing speed
        } else {
          // Pause at end of word
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        if (text.length > 0) {
          setText(currentWord.slice(0, text.length - 1));
          setTypingSpeed(60 + Math.random() * 30); // More random deleting speed
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentWordIndex]);

  // --- Cursor Blinking useEffect ---
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsCursorBlinking((prev) => !prev);
    }, 500); // Adjust blink speed as needed

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span className="inline-block text-green">
      {text}
      <span className={`text-foreground ${isCursorBlinking ? '' : 'opacity-0'}`}>|</span>
    </span>
  );
}

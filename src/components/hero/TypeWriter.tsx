"use client";

import { useState, useEffect } from "react";

interface TypeWriterProps {
  phrases: string[];
  typingSpeed?: number;
  backspaceSpeed?: number;
  pauseDuration?: number;
}

export default function TypeWriter({
  phrases,
  typingSpeed = 80,
  backspaceSpeed = 40,
  pauseDuration = 2000,
}: TypeWriterProps) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentPhrase.substring(0, text.length + 1));
          if (text.length + 1 === currentPhrase.length) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          setText(currentPhrase.substring(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setPhraseIndex((prev) => prev + 1);
          }
        }
      },
      isDeleting ? backspaceSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [text, phraseIndex, isDeleting, phrases, typingSpeed, backspaceSpeed, pauseDuration]);

  return (
    <span className="inline-flex items-center text-green-glow font-mono font-semibold">
      <span>{text}</span>
      <span className="w-2 h-5 md:h-6 bg-green-primary ml-1 inline-block animate-[typing-cursor_1s_infinite]" />
    </span>
  );
}

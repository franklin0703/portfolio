import { useEffect, useState } from "react";

const roles = [
  "Backend Developer",
  "Python Developer",
  "Data Analyst",
  "SQL Specialist",
];

function TypingEffect() {
  const [index, setIndex] = useState(0); // which role
  const [subIndex, setSubIndex] = useState(0); // char index
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = roles[index];

    // stop time
    if (!deleting && subIndex === currentWord.length) {
      const timeout = setTimeout(() => setDeleting(true), 1000);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <span className="typing">
      {roles[index].substring(0, subIndex)}
      <span className="cursor">|</span>
    </span>
  );
}

export default TypingEffect;

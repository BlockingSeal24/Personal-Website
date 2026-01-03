import { useState, useEffect } from "react";

export default function HeroTitle() {
  const text = "Hi, My Name is Tony!";
  const name = "Tony";

  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;

      if (i === text.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const nameIndex = text.indexOf(name);

  return (
    <span>

      <span>{displayed.slice(0, nameIndex)}</span>

      <span className="text-primary">
        {displayed.slice(nameIndex)}
      </span>

      <span className="animate-pulse ml-1">|</span>
    </span>
  );
}
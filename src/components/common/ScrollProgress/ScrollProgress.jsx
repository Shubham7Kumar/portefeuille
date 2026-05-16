import "./ScrollProgress.css";

import { useEffect, useState } from "react";

const ScrollProgress = () => {

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const scrollProgress =
        (window.scrollY / totalHeight) * 100;

      setProgress(scrollProgress);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (
    <div
      className="scroll-progress"
      style={{
        width: `${progress}%`,
      }}
    />
  );
};

export default ScrollProgress;
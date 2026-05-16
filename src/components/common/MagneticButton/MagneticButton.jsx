import { useRef } from "react";

import "./MagneticButton.css";

const MagneticButton = ({
  children,
  className = "",
}) => {

  const buttonRef = useRef();

  const handleMouseMove = (e) => {

    const button = buttonRef.current;

    const rect =
      button.getBoundingClientRect();

    const x =
      e.clientX - rect.left - rect.width / 2;

    const y =
      e.clientY - rect.top - rect.height / 2;

    button.style.transform =
      `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {

    buttonRef.current.style.transform =
      "translate(0px, 0px)";
  };

  return (
    <button
      ref={buttonRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

export default MagneticButton;
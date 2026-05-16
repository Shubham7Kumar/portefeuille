import { useEffect, useRef } from "react";

import { gsap } from "./useGSAPAnimations";

export const useStaggerAnimation = () => {

  const ref = useRef(null);

  useEffect(() => {

    const cards =
      ref.current.querySelectorAll(".stagger-item");

    gsap.fromTo(
      cards,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,

        duration: 1,

        stagger: 0.15,

        ease: "power3.out",

        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      }
    );

  }, []);

  return ref;
};
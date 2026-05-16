import { useEffect, useRef } from "react";

import { gsap } from "./useGSAPAnimations";

export const useFadeUp = () => {

  const ref = useRef(null);

  useEffect(() => {

    const el = ref.current;

    gsap.fromTo(
      el,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      }
    );

  }, []);

  return ref;
};
import type { Variants } from "framer-motion";

export const fromTopReveal: Variants = {
  initial: { y: "-100%", opacity: 0 },
  animate: {
    y: "0%",
    opacity: 1,
    transition: { ease: "easeInOut", duration: 0.4 },
  },
  exit: { y: "-100%", opacity: 0 },
};

export const opacityReveal: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { ease: "easeInOut", duration: 0.4 },
  },
  exit: { opacity: 0 },
};

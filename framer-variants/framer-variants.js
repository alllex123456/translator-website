export const staggeredVariant = {
  initial: { opacity: 0, y: -100 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export const fadeInVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};

export const fadeSlideUpVariant = {
  initial: { opacity: 0, y: 100 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index, duration: 1 },
  }),
};

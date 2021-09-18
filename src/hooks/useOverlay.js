const useOverlay = () => {
  const animation = {
    exit: {
      opacity: 1,
      pointerEvents: "unset",
      transition: { duration: 2, ease: "easeInOut" },
    },
    exitText: {
      opacity: 1,
      pointerEvents: "unset",
      transition: { duration: 2, ease: "easeInOut" },
    },
    animate: {
      opacity: 0,
      pointerEvents: "none",
      transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
    },
    animateText: {
      opacity: 0,
      pointerEvents: "none",
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return [animation];
};

export default useOverlay;

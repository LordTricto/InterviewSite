const useOverlay = () => {
  const animation = {
    exit: {
      opacity: 1,
      pointerEvents: "unset",
      overFlow: "hidden",
      transition: { duration: 2, ease: "easeOut" },
    },
    exitText: {
      opacity: 1,
      pointerEvents: "unset",
      transition: { duration: 2, ease: "easeOut" },
    },
    animate: {
      opacity: 0,
      pointerEvents: "none",
      overFlow: "hidden",
      transition: { delay: 0.5, duration: 1, ease: "easeOut" },
    },
    animateText: {
      opacity: 0,
      pointerEvents: "none",
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return [animation];
};

export default useOverlay;

const useOverlay = () => {
  const animation = {
    exit: {
      opacity: 1,
      pointerEvents: "unset",
      visibility: "visible",
      overFlow: "hidden",
      transition: { duration: 1, ease: "easeOut" },
    },
    exitImg: {
      opacity: 1,
      pointerEvents: "unset",
      transition: { duration: 0.5, ease: "easeOut" },
    },
    animate: {
      opacity: 0,
      pointerEvents: "none",
      overFlow: "unset",
      transition: { delay: 0.5, duration: 1, ease: "easeOut" },
    },
    animateImg: {
      opacity: 0,
      pointerEvents: "none",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return [animation];
};

export default useOverlay;

 export const listVAriatns = {
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: { opacity: 0, x: -100 },
  };

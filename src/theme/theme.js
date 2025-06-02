const light = {
  fontSizes: {
    1: "10px",
    2: "12px",
    3: "14px",
    4: "16px",
    5: "20px",
  },
  breakpoints: {
    0: "576px",
    1: "768px",
    2: "992px",
  },
  boxShadows: {
    main: "0 2px 6px rgba(0, 0, 0, 0.25);",
  },
  colors: {
    mainbg: "#FFF",
    secondbg: "#FFF",
    white: "#FFF",
    primary: "linear-gradient(134deg, #6A98F0 0%, #4961DC 99%)",
    // primarySash: "linear-gradient(134deg, #3048CF 0%, #1F2E9E 100%)",
    primarySash: "linear-gradient(134deg, #6A98F0 0%, #4961DC 99%)",
    form: "#EAEAEA",
    secondary: "#C7D0FF",
    highlight: "#C7D0FF",
    text: {
      body: "#383838",
      subtle: "#3048CF",
      subtitle: "#7489F3",
      link: "#3048CF",
      linkHover: "#383838",
    },
  },
  // ...rest of the tokens
};

const dark = {
  fontSizes: {
    1: "10px",
    2: "12px",
    3: "14px",
    4: "16px",
    5: "20px",
  },
  breakpoints: {
    0: "576px",
    1: "768px",
    2: "992px",
  },
  boxShadows: {
    main: "0 2px 6px rgba(255, 255, 255, 0.12);",
  },
  colors: {
    mainbg: "#191919",
    secondbg: "#232323",
    white: "#F8F8F8",
    primary: "linear-gradient(134deg, #6A98F0 0%, #4961DC 99%)",
    // primarySash: "linear-gradient(134deg, #3048CF 0%, #1F2E9E 100%)",
    // primarySash: "linear-gradient(134deg, #6A98F0 0%, #4961DC 99%)",
    primarySash: "linear-gradient(134deg, #232323 0%, #232323 99%)",
    form: "#303030",
    secondary: "#303030",
    highlight: "#C7D0FF",
    text: {
      body: "#F8F8F8",
      subtle: "#3048CF",
      subtitle: "#F8F8F8",
      link: "#F8F8F8",
      linkHover: "#7489F3",
    },
  },
  // ...rest of the tokens
};

export { light, dark };

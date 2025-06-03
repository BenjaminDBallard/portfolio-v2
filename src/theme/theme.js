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
    main: "0 2px 6px rgba(0, 0, 0, 0.3);",
    top: "0 -2px 6px rgba(0, 0, 0, 0.3)",
  },
  colors: {
    mainbg: "#FFF",
    secondbg: "#FFF",
    white: "#FFF",
    form: "#EAEAEA",
    text: {
      header: "#383838",
      body: "#383838",
    },
  },
  overwriteAccent: {
    accentHover: "#383838",
  }
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
    main: "0 2px 6px rgba(0, 0, 0, 0.3);",
    top: "0 -6px 12px -4px rgba(0, 0, 0, 0.3)",
  },
  colors: {
    mainbg: "#191919",
    secondbg: "#303030",
    white: "#F8F8F8",
    form: "#232323",
    text: {
      header: "#F8F8F8",
      body: "#D0D0D0",
    },
  },
  overwriteAccent: {
    accentBackground: "linear-gradient(134deg, #232323 0%, #232323 99%)",
    accentText: "#F8F8F8",
    accentHighlight: "#303030"
  }
};

export { light, dark };

const color = {
  white: "white",
  black: "black",
};
const size = {
  desktop: "768px",
};

const theme = {
  color,
  media: {
    mobile: `(max-width: ${size.desktop})`,
    desktop: `(min-width: ${size.desktop})`,
  },
};

export type Theme = typeof theme;

export default theme;

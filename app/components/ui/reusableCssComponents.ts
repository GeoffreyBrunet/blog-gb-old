import { css } from "../../../styled-system/css";

export const CssForLink = css({
  fontWeight: "bold",
  textDecoration: "none",
  whiteSpace: "nowrap",
  color: "black",
  position: "relative",
  _after: {
    content: "''",
    position: "absolute",
    zIndex: -1,
    top: "66%",
    left: "-0.1em",
    right: "-0.1em",
    bottom: "0",
    transition: "top 200ms cubic-bezier(0, 0.8, 0.13, 1)",
    backgroundColor: "rgba(79, 192, 141, 0.5)",
  },
  _hover: {
    _after: {
      top: "0%",
    },
  },
});

export const CssforP = css({
  fontSize: "1.6em",
  fontWeight: 300,
  marginTop: "20px",
  maxWidth: "28em",
});

import { css } from "@/styled-system/css";
import Link from "next/link";
import { CssForLink } from "./ui/reusableCssComponents";

export const CssLinkWithMargin = css({
  fontWeight: "bold",
  marginLeft: "15px",
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

export default function Navigation() {
  return (
    <div className={css({ fontSize: "xl" })}>
      <Link href="/" className={CssForLink}>
        Accueil
      </Link>
      <Link href="/blog" className={CssLinkWithMargin}>
        Blog
      </Link>
    </div>
  );
}

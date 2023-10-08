import { css } from "@/styled-system/css";
import Link from "next/link";
import Navigation from "../components/Navigation";

export default function Blog() {
  return (
    <>
      <Navigation />
      <h1
        className={css({
          fontSize: "4.5em",
          fontWeight: "bold",
          marginTop: "20px",
        })}
      >
        Blog posts 🎋
      </h1>
      <div
        className={css({
          fontSize: "1.6em",
          fontWeight: 300,
          marginTop: "20px",
        })}
      >
        <ul>
          <li>
            <Link href="/blog/ok">Test</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

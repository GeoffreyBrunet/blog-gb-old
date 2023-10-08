import { css } from "@/styled-system/css";
import "./global.css";
import { CssForLink, CssforP } from "./components/ui/reusableCssComponents";
import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
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
        Ohayô ⛩️
      </h1>
      <h2
        className={css({
          fontSize: "2.2em",
          fontWeight: 500,
          marginTop: "20px",
        })}
      >
        Je m&apos;appelle <strong>Geoffrey Brunet</strong>.
      </h2>
      <p className={CssforP}>
        Je suis un développeur full stack, pour une entreprise parisienne
        spécialisée dans la BI et l&apos;EPM. Mon rôle est de développer des
        outils (
        <strong className={css({ fontWeight: "bold" })}>
          interfaces webs, APIs REST, bases de données
        </strong>
        ) utilisés autours de notre solution logicielle, permettant la
        manipuation de bases de données multidimensionnelles dans Microsoft
        Excel ou Google Sheets. Je code en{" "}
        <strong className={css({ fontWeight: "bold" })}>TypeScript</strong> et
        en <strong className={css({ fontWeight: "bold" })}>Rust</strong>, le
        second étant principalement sur des projets personels.
      </p>
      <p className={CssforP}>
        Ce blog est fait avec&#x205F;
        <Link href="https://nextjs.org/" target="_blank" className={CssForLink}>
          Next.js
        </Link>
        &#x205F;et me sert tout autant de lab, qu&apos;à partager mes
        connaissances. Il est fait sans framework, et avec des outils
        exclusivement&#x205F;
        <strong className={css({ fontWeight: "bold" })}>open-source</strong>. Le
        code source est disponible sur Github dans ce&#x205F;
        <Link
          href="https://github.com/GeoffreyBrunet/geoffreybrunet.github.io"
          target="_blank"
          className={CssForLink}
        >
          repository
        </Link>
        .
      </p>
      <p className={CssforP}>
        Hormis le développement informatique, j&apos;aime le running ,le trail,
        la culture japonaise, la décoration d&apos;intérieur et la cuisine. Je
        suis contactable par&#x205F;
        <Link
          href="https://twitter.com/geoffreybrunet5"
          target="_blank"
          className={CssForLink}
        >
          X
        </Link>
        &#x205F;et&#x205F;
        <Link
          href="https://www.linkedin.com/in/geoffrey-brunet-558315ba/"
          target="_blank"
          className={CssForLink}
        >
          LinkedIn
        </Link>
        .
      </p>
    </>
  );
}

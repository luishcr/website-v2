import Head from "next/head";
import Skills from "../components/Main/Skills";
import Projects from "../components/Main/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>💻 luishcr</title>
        <meta name="description" content="next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Azeret+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="home">
        <h2>About me</h2>
        <p className="description">
          Hi, my name is Luis Cubillos, I am a self-taught software developer
          and I am currently learning front-end web development with React and
          Angular.
        </p>

        <h2>Skills</h2>
        <Skills />

        <h2> Projects </h2>
        <Projects />
      </div>
    </>
  );
}

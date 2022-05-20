import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/a25f409e18.js"
        crossOrigin="anonymous"
      ></Script>
      <Head>
        <title>💻 luishcr</title>
        <meta name="description" content="next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h2>Sobre mí</h2>

          <p className={styles.description}>
            Me llamo Luis Cubillos, soy desarrollador de software y actualmente
            estoy enfocado en mejorar mis habilidades de frontend trabajando en
            proyectos como freelancer.
          </p>

          <h2>Habilidades</h2>
          <div className={styles.skills}>
            <section>
              <h3>HTML5</h3>
              <i className="fab fa-html5"></i>
            </section>
            <section>
              <h3>CSS3</h3>
              <i className="fab fa-css3"></i>
            </section>
            <section>
              <h3>SASS</h3>
              <i className="fab fa-sass"></i>
            </section>
            <section>
              <h3>BootStrap</h3>
              <i className="fab fa-bootstrap"></i>
            </section>
            <section>
              <h3>JavaScript</h3>
              <i className="fab fa-js"></i>
            </section>
            <section>
              <h3>React/Nextjs</h3>
              <i className="fab fa-react"></i>
            </section>
            <section>
              <h3>Node</h3>
              <i className="fab fa-node"></i>
            </section>
            <section>
              <h3>PHP</h3>
              <i className="fab fa-php"></i>
            </section>
            <section>
              <h3>SQL</h3>
              <i className="fas fa-database"></i>
            </section>
            <section>
              <h3>Git</h3>
              <i className="fab fa-git"></i>
            </section>
            <section>
              <h3>Github</h3>
              <i className="fab fa-github"></i>
            </section>
          </div>
          <h2> Proyectos </h2>
          <div className={styles.projects}></div>
        </main>

        {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
      </div>
    </>
  );
}

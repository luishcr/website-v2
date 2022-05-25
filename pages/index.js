import Skills from "../components/Main/Skills";
import Projects from "../components/Main/Projects";

export default function Home() {
  return (
    <>
      <div className="home">
        <section className="description">
          <h2>About me</h2>
          <p>
            Hi, my name is Luis Cubillos, I am a self-taught software developer
            and I am currently learning front-end web development with React and
            Angular.
          </p>
        </section>

        <Skills />

        <Projects />
      </div>
    </>
  );
}

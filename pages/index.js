import Skills from "../components/Main/Skills";
import Projects from "../components/Main/Projects";
import { FaAngleRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="home">
        <section className="description">
          <h2>
            {" "}
            <FaAngleRight /> whoami
          </h2>
          <p>
            My name is Luis Cubillos and I am a self-taught software developer
            and an electrician.
          </p>
        </section>

        <Skills />

        <Projects />
      </div>
    </>
  );
}

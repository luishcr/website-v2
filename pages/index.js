import Skills from "../components/Main/Skills";
import Projects from "../components/Main/Projects";
import Form from "../components/Main/Form";
import { FaAngleRight } from "react-icons/fa";
import { BiMessageDots } from "react-icons/bi";
import { IconContext } from "react-icons";

export default function Home() {
  return (
    <>
      <div className="home">
        <section className="description">
          <h2>
            <FaAngleRight /> whoami
          </h2>
          <p>
            Hi, my name is Luis Cubillos, I am an electrician and a self-taught web developer, specialized in back-end.
          </p>
        </section>

        <Skills />

        <Projects />

        <h2>
          <FaAngleRight /> contact
        </h2>
        <section className="contact">
          <div className="contact__camp">
            <IconContext.Provider value={{ className: "contact__icon" }}>
              <BiMessageDots />
            </IconContext.Provider>
            <a
              href="https://www.linkedin.com/in/luishcr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Text me on Linkedin!
            </a>
          </div>

          <div className="contact__camp">
            <IconContext.Provider value={{ className: "contact__icon" }}>
              <BiMessageDots />
            </IconContext.Provider>
            <a
              href="https://twitter.com/luishcrDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Text me on Twitter!
            </a>
          </div>
        </section>

        <Form />
      </div>
    </>
  );
}

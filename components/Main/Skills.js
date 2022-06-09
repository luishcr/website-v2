import styles from "./Main.module.scss";
import {
  FaSass,
  FaJs,
  FaReact,
  FaPhp,
  FaPython,
  FaAngleRight,
} from "react-icons/fa";
import { SiMysql, SiNextdotjs } from "react-icons/si";
import { IconContext } from "react-icons";

export default function Skills() {
  return (
    <section className="section">
      <h2>
        <FaAngleRight /> which skills
      </h2>
      <div className={styles.skills}>
        <section>
          <h3>SASS</h3>
          <IconContext.Provider
            value={{ className: "main__skills_icons hvr-grow" }}
          >
            <FaSass />
          </IconContext.Provider>
        </section>
        <section>
          <h3>JavaScript</h3>
          <IconContext.Provider
            value={{ className: "main__skills_icons hvr-grow" }}
          >
            <FaJs />
          </IconContext.Provider>
        </section>
        <section>
          <h3>React</h3>
          <IconContext.Provider
            value={{ className: "main__skills_icons hvr-grow" }}
          >
            <FaReact />
          </IconContext.Provider>
        </section>
        <section>
          <h3>NextJS</h3>
          <IconContext.Provider
            value={{ className: "main__skills_icons hvr-grow" }}
          >
            <SiNextdotjs />
          </IconContext.Provider>
        </section>
        <section>
          <h3>Python</h3>
          <IconContext.Provider
            value={{ className: "main__skills_icons hvr-grow" }}
          >
            <FaPython />
          </IconContext.Provider>
        </section>
        <section>
          <h3>PHP</h3>
          <IconContext.Provider
            value={{ className: "main__skills_icons hvr-grow" }}
          >
            <FaPhp />
          </IconContext.Provider>
        </section>
        <section>
          <h3>MySQL</h3>
          <IconContext.Provider
            value={{ className: "main__skills_icons hvr-grow" }}
          >
            <SiMysql />
          </IconContext.Provider>
        </section>
      </div>
    </section>
  );
}

import styles from "./Main.module.scss";
import {
  FaSass,
  FaJs,
  FaReact,
  FaPhp,
  FaPython,
  FaAngleRight,
} from "react-icons/fa";
import { SiPostgresql, SiNextdotjs, SiMongodb, SiDocker, SiLinux } from "react-icons/si";
import { IconContext } from "react-icons";
import {MdSecurity} from "react-icons/md"

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
          <h3>SQL</h3>
          <IconContext.Provider
            value={{ className: "main__skills_icons hvr-grow" }}
          >
            <SiPostgresql />
          </IconContext.Provider>
        </section>
        <section>
          <h3>MongoDB</h3>
          <IconContext.Provider
            value={{ className: "main__skills_icons hvr-grow" }}
          >
            <SiMongodb />
          </IconContext.Provider>
        </section>
        <section>
          <h3>Docker</h3>
          <IconContext.Provider
            value={{ className: "main__skills_icons hvr-grow" }}
          >
            <SiDocker />
          </IconContext.Provider>
        </section>
        <section>
          <h3>Linux</h3>
          <IconContext.Provider
            value={{ className: "main__skills_icons hvr-grow" }}
          >
            <SiLinux />
          </IconContext.Provider>
        </section>
        <section>
          <h3>Cybersecurity</h3>
          <IconContext.Provider
            value={{ className: "main__skills_icons hvr-grow" }}
          >
            <MdSecurity />
          </IconContext.Provider>
        </section>
      </div>
    </section>
  );
}

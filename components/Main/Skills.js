import styles from "./Main.module.scss";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaNpm,
  FaJs,
  FaReact,
  FaPhp,
  FaGitSquare,
  FaGithubSquare,
  FaLinux,
  FaWindows,
  FaDocker,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { IconContext } from "react-icons";

export default function Skills() {
  return (
    <section className="section">
      <h2>Dev Skills</h2>
      <div className={styles.skills}>
        <section>
          <h3>HTML5</h3>
          <IconContext.Provider
            value={{ className: "main__skills_icons hvr-grow " }}
          >
            <FaHtml5 />
          </IconContext.Provider>
        </section>

        <section>
          <h3>CSS3</h3>
          <IconContext.Provider
            value={{ className: "main__skills_icons hvr-grow" }}
          >
            <FaCss3Alt />
          </IconContext.Provider>
        </section>
        <section>
          <h3>SASS</h3>
          <IconContext.Provider
            value={{ className: "main__skills_icons hvr-grow" }}
          >
            <FaSass />
          </IconContext.Provider>
        </section>
        <section>
          <h3>BootStrap</h3>
          <IconContext.Provider
            value={{ className: "main__skills_icons hvr-grow" }}
          >
            <FaBootstrap />
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
          <h3>npm</h3>
          <IconContext.Provider
            value={{ className: "main__skills_icons hvr-grow" }}
          >
            <FaNpm />
          </IconContext.Provider>
        </section>
        <section>
          <h3>React/Nextjs</h3>
          <IconContext.Provider
            value={{ className: "main__skills_icons hvr-grow" }}
          >
            <FaReact />
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
        <section>
          <h3>Git</h3>
          <IconContext.Provider
            value={{ className: "main__skills_icons hvr-grow" }}
          >
            <FaGitSquare />
          </IconContext.Provider>
        </section>
        <section>
          <h3>Github</h3>
          <IconContext.Provider
            value={{ className: "main__skills_icons hvr-grow" }}
          >
            <FaGithubSquare />
          </IconContext.Provider>
        </section>
        <section>
          <h3>Linux</h3>
          <IconContext.Provider
            value={{ className: "main__skills_icons hvr-grow" }}
          >
            <FaLinux />
          </IconContext.Provider>
        </section>
        <section>
          <h3>Windows</h3>
          <IconContext.Provider
            value={{ className: "main__skills_icons hvr-grow" }}
          >
            <FaWindows />
          </IconContext.Provider>
        </section>
        <section>
          <h3>Docker</h3>
          <IconContext.Provider
            value={{ className: "main__skills_icons hvr-grow" }}
          >
            <FaDocker />
          </IconContext.Provider>
        </section>
        <section>
          <h3>Cybersec</h3>
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

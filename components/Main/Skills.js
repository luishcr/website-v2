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
    <div className={styles.skills}>
      <section>
        <h3>HTML5</h3>
        <IconContext.Provider value={{ className: "main__skills_icons" }}>
          <FaHtml5 />
        </IconContext.Provider>
      </section>

      <section>
        <h3>CSS3</h3>
        <IconContext.Provider value={{ className: "main__skills_icons" }}>
          <FaCss3Alt />
        </IconContext.Provider>
      </section>
      <section>
        <h3>SASS</h3>
        <IconContext.Provider value={{ className: "main__skills_icons" }}>
          <FaSass />
        </IconContext.Provider>
      </section>
      <section>
        <h3>BootStrap</h3>
        <IconContext.Provider value={{ className: "main__skills_icons" }}>
          <FaBootstrap />
        </IconContext.Provider>
      </section>
      <section>
        <h3>JavaScript</h3>
        <IconContext.Provider value={{ className: "main__skills_icons" }}>
          <FaJs />
        </IconContext.Provider>
      </section>
      <section>
        <h3>npm</h3>
        <IconContext.Provider value={{ className: "main__skills_icons" }}>
          <FaNpm />
        </IconContext.Provider>
      </section>
      <section>
        <h3>React/Nextjs</h3>
        <IconContext.Provider value={{ className: "main__skills_icons" }}>
          <FaReact />
        </IconContext.Provider>
      </section>
      <section>
        <h3>PHP</h3>
        <IconContext.Provider value={{ className: "main__skills_icons" }}>
          <FaPhp />
        </IconContext.Provider>
      </section>
      <section>
        <h3>MySQL</h3>
        <IconContext.Provider value={{ className: "main__skills_icons" }}>
          <SiMysql />
        </IconContext.Provider>
      </section>
      <section>
        <h3>Git</h3>
        <IconContext.Provider value={{ className: "main__skills_icons" }}>
          <FaGitSquare />
        </IconContext.Provider>
      </section>
      <section>
        <h3>Github</h3>
        <IconContext.Provider value={{ className: "main__skills_icons" }}>
          <FaGithubSquare />
        </IconContext.Provider>
      </section>
      <section>
        <h3>Linux</h3>
        <IconContext.Provider value={{ className: "main__skills_icons" }}>
          <FaLinux />
        </IconContext.Provider>
      </section>
      <section>
        <h3>Windows</h3>
        <IconContext.Provider value={{ className: "main__skills_icons" }}>
          <FaWindows />
        </IconContext.Provider>
      </section>
      <section>
        <h3>Docker</h3>
        <IconContext.Provider value={{ className: "main__skills_icons" }}>
          <FaDocker />
        </IconContext.Provider>
      </section>
      <section>
        <h3>Cybersec</h3>
        <IconContext.Provider value={{ className: "main__skills_icons" }}>
          <MdSecurity />
        </IconContext.Provider>
      </section>
    </div>
  );
}

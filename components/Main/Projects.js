import styles from "./Main.module.scss";
import Image from "next/image";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaAngleRight,
  FaReact,
} from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2> Projects </h2>
      <div className={styles.projects}>
        <div className={styles.project__two}>
          <h3>To-do App</h3>
          <section>
            <Image
              src="/images/todo-app_preview.gif"
              alt="Project two preview"
              width={600}
              height={370}
            />
            <p>
              Built in: <br />
              HTML5 <FaHtml5 />
              CSS3 Module <FaCss3Alt />
              JavaScript/React <FaJs /> <FaReact />
              <br />
              <a
                href="https://luishcr.github.io/to-do-app"
                target="_blank"
                rel="noopener noreferrer"
                className="hvr-icon-forward hvr-icon3"
              >
                View Web
                <IconContext.Provider
                  value={{ className: "hvr-icon-forward hvr-icon3" }}
                >
                  <FaAngleRight />
                </IconContext.Provider>
              </a>
              <br />
              <a
                href="https://github.com/luishcr/to-do-app"
                target="_blank"
                rel="noopener noreferrer"
                className="hvr-icon-forward hvr-icon3"
              >
                View Code
                <IconContext.Provider
                  value={{ className: "hvr-icon-forward hvr-icon3" }}
                >
                  <FaAngleRight />
                </IconContext.Provider>
              </a>
            </p>
          </section>
        </div>
        <div className={styles.project__one}>
          <h3>JavaScript Challenges</h3>
          <section>
            <Image
              src="/images/project_1_preview.gif"
              alt="Project one preview"
              width={600}
              height={370}
            />
            <p>
              Built in: <br />
              HTML5 <FaHtml5 />
              CSS3/SCSS <FaCss3Alt />
              <FaSass />
              JavaScript <FaJs />
              <br />
              <a
                href="https://luishcr.github.io/javascript-challenges"
                target="_blank"
                rel="noopener noreferrer"
                className="hvr-icon-forward hvr-icon3"
              >
                View Web
                <IconContext.Provider
                  value={{ className: "hvr-icon-forward hvr-icon3" }}
                >
                  <FaAngleRight />
                </IconContext.Provider>
              </a>
              <br />
              <a
                href="https://github.com/luishcr/javascript-challenges"
                target="_blank"
                rel="noopener noreferrer"
                className="hvr-icon-forward hvr-icon3"
              >
                View Code
                <IconContext.Provider
                  value={{ className: "hvr-icon-forward hvr-icon3" }}
                >
                  <FaAngleRight />
                </IconContext.Provider>
              </a>
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

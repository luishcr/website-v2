import styles from "./Main.module.scss";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2>
        <FaAngleRight /> ls /projects{" "}
      </h2>
      <div className={styles.portfolio}>
        <div className={styles.project}>
          <h3>To-do App</h3>
          <section>
            <Image
              src="/images/project_2_preview.png"
              alt="Project two preview"
              width={600}
              height={370}
            />
            <div className={styles.project__description}>
              <p>Simple to-do app with localstorage and search bar</p>
              <span>JavaScript</span>
              <span>CSS3 Module</span>
              <span>Reactjs</span>
            </div>

            <div className={styles.project__links}>
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
            </div>
          </section>
        </div>

        <div className={styles.project}>
          <h3>JavaScript Challenges</h3>
          <section>
            <Image
              src="/images/project_1_preview.png"
              alt="Project one preview"
              width={600}
              height={370}
            />
            <div className={styles.project__description}>
              <p>Web with JavaScript challenges solution and night mode</p>
              <span>JavaScript</span>
              <span>SASS</span>
            </div>
            <div className={styles.project__links}>
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
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

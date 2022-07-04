import styles from "./Main.module.scss";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2>
        <FaAngleRight /> ls /porfolio{" "}
      </h2>
      <div className={styles.portfolio}>
        <div className={styles.project}>
          <h3>To-do App</h3>
          <section>
            <Image
              src="/images/todo_app_preview.png"
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
                Demo
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
                Code
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
              src="/images/javascript_challenges_preview.png"
              alt="Project two preview"
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
                Demo
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
                Code
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
          <h3>Password Generator</h3>
          <section>
            <Image
              src="/images/password_generator_preview.png"
              alt="Project 3 preview"
              width={600}
              height={370}
            />
            <div className={styles.project__description}>
              <p>Simple script with python and pyScript</p>
              <span>JavaScript</span>
              <span>CSS3</span>
              <span>Python</span>
            </div>
            <div className={styles.project__links}>
              <a
                href="https://luishcr.github.io/password-generator/"
                target="_blank"
                rel="noopener noreferrer"
                className="hvr-icon-forward hvr-icon3"
              >
                Demo
                <IconContext.Provider
                  value={{ className: "hvr-icon-forward hvr-icon3" }}
                >
                  <FaAngleRight />
                </IconContext.Provider>
              </a>

              <a
                href="https://github.com/luishcr/password-generator"
                target="_blank"
                rel="noopener noreferrer"
                className="hvr-icon-forward hvr-icon3"
              >
                Code
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

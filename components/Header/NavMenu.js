import Link from "next/link";
import styles from "./Header.module.scss";
import { IconContext } from "react-icons";
import { FaHouseUser, FaBlogger, FaRegFilePdf } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";

export default function NavMenu() {
  return (
    <ul className={styles.nav__menu_list}>
      <li>
        <Link href="/">
          <a>
            <IconContext.Provider value={{ className: "nav__menu_icons" }}>
              <FaHouseUser /> About me
            </IconContext.Provider>
          </a>
        </Link>
      </li>
      <li>
        <a
          href="https://blog.luishcr.es"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContext.Provider value={{ className: "nav__menu_icons" }}>
            <FaBlogger /> Blog
          </IconContext.Provider>
        </a>
      </li>
      <li>
        <Link href="/docs/resume.pdf">
          <a download target="_blank" rel="noopener noreferrer">
            <IconContext.Provider value={{ className: "nav__menu_icons" }}>
              <FaRegFilePdf /> Resume
            </IconContext.Provider>
          </a>
        </Link>
      </li>
      <li>
        <a
          href="https://www.luishcr.es/contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContext.Provider value={{ className: "nav__menu_icons" }}>
            <SiMaildotru /> Contact
          </IconContext.Provider>
        </a>
      </li>
    </ul>
  );
}

import Link from "next/link";
import styles from "./Header.module.scss";

export default function NavLinks() {
  return (
    <ul className={styles.nav__links} id="nav__links">
      <li>
        <Link href="/">
          <a>
            <i className="fas fa-home"></i> About me
          </a>
        </Link>
      </li>
      <li>
        <a
          href="https://blog.luishcr.es"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-book"></i> Blog
        </a>
      </li>
      <li>
        <a
          href="https://www.luishcr.es/docs/LuisHCR_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-file-pdf"></i> Resume
        </a>
      </li>
      <li>
        <a
          href="https://www.luishcr.es/contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i> Contact
        </a>
      </li>
    </ul>
  );
}

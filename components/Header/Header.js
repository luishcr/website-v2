import NavLinks from "./NavLinks";
import Link from "next/link";
import styles from "./Header.module.scss";
import { useState } from "react";

export default function Header() {
  const [showNav, setshowNav] = useState(false);

  return (
    <header>
      <nav className={styles.nav__background}>
        <div className={styles.nav__menu}>
          <div className={styles.nav__mobile}>
            <div className={styles.nav__mobile_logo}>
              <a href="/">
                <img
                  src="../../images/whiteLogo.png"
                  className="white-logos"
                  alt="LOGO"
                />
              </a>
            </div>

            <button
              onClick={() => setshowNav(!showNav)}
              className={styles.nav__toggle}
              id="nav__toggle"
            >
              <img src="../../images/toggle.png" alt="toggle button" />
            </button>
            {showNav ? <NavLinks /> : null}
          </div>

          <div className={styles.nav__logo}>
            <a href="/">
              <img
                src="../../images/whiteLogo.png"
                className="white-logos"
                alt="LOGO"
              />
            </a>
          </div>
          <NavLinks />
        </div>
      </nav>

      {/* SOCIAL NAV ICONS */}
      <nav className={styles.navSocial__icons}>
        <ul className={styles.navSocial__list}>
          <li className={styles.navSocial__item}>
            <a
              href="https://www.linkedin.com/in/luishcr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"> </i>
            </a>
          </li>
          <li className={styles.navSocial__item}>
            <a
              href="https://github.com/LuisHCR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square"> </i>
            </a>
          </li>
          <li className={styles.navSocial__item}>
            <a
              href="https://twitter.com/Luishcerre"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter-square"> </i>
            </a>
          </li>
          <li className={styles.navSocial__item}>
            <a
              href="https://stackoverflow.com/users/15593896/luishcr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-stack-overflow"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

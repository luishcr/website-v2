import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer__background}>
        <div className={styles.footer__logo}>
          <a href="index.html">
            <img
              src="../../images/whiteLogo.png"
              className="white-logos"
              alt="LOGO"
            />
          </a>
        </div>
        <div>
          <ul className={styles.footer__list}>
            <li className={styles.footerSocial__item}>
              <a
                href="https://www.linkedin.com/in/luishcr"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"> </i>
              </a>
            </li>
            <li className={styles.footerSocial__item}>
              <a
                href="https://github.com/LuisHCR"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github-square"> </i>
              </a>
            </li>
            <li className={styles.footerSocial__item}>
              <a
                href="https://twitter.com/luishcerre"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter-square"> </i>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footer__copy}>
          <p>&copy; luishcr</p>
        </div>
      </div>
    </footer>
  );
}

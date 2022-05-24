import Image from "next/image";
import styles from "./Header.module.scss";
import NavMenu from "./NavMenu";
import NavIcons from "./NavIcons";
import Logo from "./Logo";
import { useState } from "react";

export default function Header() {
  const [showNav, setshowNav] = useState(false);

  return (
    <header>
      {/*  MENU NAVBAR  */}
      <nav className={styles.nav__background}>
        <div className={styles.nav__menu}>
          <div className={styles.nav__mobile}>
            <Logo />
            <button
              onClick={() => setshowNav(!showNav)}
              className={styles.nav__toggle}
            >
              <Image
                src="/../public/images/toggle.png"
                alt="toggle button"
                width={40}
                height={30}
              />
            </button>
            {showNav ? <NavMenu /> : null}
          </div>

          <Logo />

          <NavMenu />
        </div>
      </nav>

      {/*  ICONS NAVBAR  */}
      <nav className={styles.nav__icons}>
        <NavIcons />
      </nav>
    </header>
  );
}

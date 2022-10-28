import { FiMenu } from "react-icons/fi";

import s from "../../styles/header.module.scss";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import NavbarMenu from "./NavbarMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [navMenu, setNavMenu] = useState(0);

  console.log(navMenu);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className={s.lineSection}>
        <div className={s.line}></div>
        <div className={s.line}></div>
        <div className={s.line}></div>
        <div className={s.line}></div>
        <div className={s.line}></div>
      </div>
      <canvas className={s.gradient}></canvas>
      <div className={s.navContainer}>
        <div className={s.navbar}>
          <img src="./logo.png" className={s.logo} />
          <div className={s.navLinks}>
            <ul className={s.navList}>
              <li className={s.navLink} onMouseEnter={() => setNavMenu(1)}>
                Products
              </li>
              <li className={s.navLink} onMouseEnter={() => setNavMenu(2)}>
                Solutions
              </li>
              <li className={s.navLink} onMouseEnter={() => setNavMenu(3)}>
                Developers
              </li>
              <li className={s.navLink} onMouseEnter={() => setNavMenu(4)}>
                Resources
              </li>
              <li className={s.navLink}>Pricing</li>
            </ul>
          </div>
          <button className={s.navBtn}>
            Sign in<span className={s.arrow}></span>
          </button>
          <div className={s.mobileButtonContainer}>
            <FiMenu className={s.mobileMenuIcon} onClick={toggleMobileMenu} />
          </div>
        </div>
        <NavbarMenu index={navMenu} setNavMenu={setNavMenu} />
        <MobileMenu isOpen={isOpen} toggleMobileMenu={toggleMobileMenu} />

        <div className={s.heroContainer}>
          <div className={s.heroTextContainer}>
            <h1 className={s.title}>
              Financial <br /> infrastructure <br />
              for the internet
            </h1>
            <p className={s.text}>
              Millions of companies of all sizes—from startups to Fortune <br />
              500s—use Stripe&apos;s software and APIs to accept payments,{" "}
              <br />
              send payouts, and manage their businesses online.
            </p>
            <div className={s.buttonContainer}>
              <button className={s.startBtn}>
                Start now<span className={s.arrow}></span>
              </button>
              <button className={s.contactBtn}>
                Contact sales<span className={s.arrow}></span>
              </button>
            </div>
          </div>
        </div>
        <div className={s.logosContainer}>
          <img src="./instacart.png" className={s.partnerLogo} />
          <img src="./salesforce.png" className={s.partnerLogo} />
          <img src="./amazon.png" className={s.partnerLogo} />
          <img src="./slack.png" className={s.partnerLogo} />
          <img src="./shopify.png" className={s.partnerLogo} />
          <img src="./google.png" className={s.partnerLogo} />
          <img src="./lyft.png" className={s.partnerLogo} />
          <img src="./zoom.png" className={s.partnerLogo} />
        </div>
      </div>
    </div>
  );
}

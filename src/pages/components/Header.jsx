import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";

import s from "../../styles/header.module.scss";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
              <li className={s.navLink}>Products</li>
              <li className={s.navLink}>Solutions</li>
              <li className={s.navLink}>Developers</li>
              <li className={s.navLink}>Resources</li>
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
        <div
          className={`${s.mobileMenuContainer} ${isOpen && s.mobileMenuOpen}`}
        >
          <div className={s.mobileMenuTop}>
            <img src="./logo(purple).png" className={s.mobileMenuLogo} />
            <AiOutlineClose
              className={s.mobileCloseIcon}
              onClick={toggleMobileMenu}
            />
          </div>
          <div className={s.productsContainer}>
            <h2 className={s.menuTitle}>Products</h2>
            <div className={s.divider}></div>
            <ul className={s.productsList}>
              <li className={s.productsListItem}>
                <div className={s.listItemTextContainer}>
                  <p className={s.listItemHeading}>Global Payments</p>
                  <p className={s.listItemText}>
                    Accept payments online, in-person, or through your platform.
                  </p>
                </div>
                <MdArrowForwardIos size={20} />
              </li>
              <li className={s.productsListItem}>
                <div className={s.listItemTextContainer}>
                  <p className={s.listItemHeading}>
                    Revenue and financial management
                  </p>
                  <p className={s.listItemText}>
                    Automate revenue collection and finance.
                  </p>
                </div>
                <MdArrowForwardIos size={20} />
              </li>
              <li className={s.productsListItem}>
                <div className={s.listItemTextContainer}>
                  <p className={s.listItemHeading}>Banking-as-a-Service</p>
                  <p className={s.listItemText}>
                    Embed financial services in your platform or product.
                  </p>
                </div>
                <MdArrowForwardIos size={20} />
              </li>
            </ul>
          </div>
          <ul className={s.mobileLinks}>
            <li className={s.mobileLink}>
              <h1 className={s.mobileLinkHeading}>Solutions</h1>
              <MdArrowForwardIos size={20} />
            </li>
            <div className={s.divider}></div>
            <li className={s.mobileLink}>
              <h1 className={s.mobileLinkHeading}>Developers</h1>
              <MdArrowForwardIos size={20} />
            </li>
            <div className={s.divider}></div>
            <li className={s.mobileLink}>
              <h1 className={s.mobileLinkHeading}>Resources</h1>
              <MdArrowForwardIos size={20} />
            </li>
            <div className={s.divider}></div>
            <li className={s.mobileLink}>
              <h1 className={s.mobileLinkHeading}>Pricing</h1>
            </li>
          </ul>
          <div className={s.mobileMenuButtonContainer}>
            <button className={s.mobileMenuBtn}>
              Sign in<span className={s.arrow}></span>
            </button>
          </div>
        </div>

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

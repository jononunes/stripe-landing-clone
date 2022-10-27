import { AiOutlineClose } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";

import s from "../../styles/mobilemenu.module.scss";

export default function MobileMenu({ isOpen, toggleMobileMenu }) {
  return (
    <div>
      <div className={`${s.mobileMenuContainer} ${isOpen && s.mobileMenuOpen}`}>
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
    </div>
  );
}

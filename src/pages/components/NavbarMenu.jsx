import s from "../../styles/navbarmenu.module.scss";

export default function NavbarMenu({ index, setNavMenu }) {
  return (
    <div>
      <div
        className={`${s.navbarMenuContainer} ${index === 0 && s.hideMenu}`}
        onMouseLeave={() => setNavMenu(0)}
      >
        <div
          className={`${s.menuArrow} ${index === 1 && s.arrowProducts} ${
            index === 2 && s.arrowSolutions
          } ${index === 3 && s.arrowDevelopers} ${
            index === 4 && s.arrowResources
          }`}
        ></div>
        <div className={`${s.subMenu} ${index !== 2 && s.hideSubMenu}`}>
          <div className={s.subSection}>
            <h1 className={s.subMenuHeading}>USE CASES</h1>
            <ul className={s.subMenuList}>
              <li className={s.subMenuLink}>
                <img src="./Ecommerce.PNG" alt="" className={s.subLinkIcon} />
                <h1 className={s.subLinkText}>Ecommerce</h1>
              </li>
              <li className={s.subMenuLink}>
                <img src="./SaaS.PNG" alt="" className={s.subLinkIcon} />
                <h1 className={s.subLinkText}>SaaS</h1>
              </li>
              <li className={s.subMenuLink}>
                <img
                  src="./Marketplaces.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Marketplaces</h1>
              </li>
              <li className={s.subMenuLink}>
                <img
                  src="./EmbeddedFinance.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Embedded Finance</h1>
              </li>
            </ul>
            <ul className={s.subMenuList}>
              <li className={s.subMenuLink}>
                <img src="./Platforms.PNG" alt="" className={s.subLinkIcon} />
                <h1 className={s.subLinkText}>Platforms</h1>
              </li>
              <li className={s.subMenuLink}>
                <img
                  src="./CreatorEconomy.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Creator Economy</h1>
              </li>
              <li className={s.subMenuLink}>
                <img src="./Crypto.PNG" alt="" className={s.subLinkIcon} />
                <h1 className={s.subLinkText}>Crypto</h1>
              </li>
              <li className={s.subMenuLink}>
                <img src="./Enterprise.PNG" alt="" className={s.subLinkIcon} />
                <h1 className={s.subLinkText}>Global Businesses</h1>
              </li>
            </ul>
          </div>
          <div className={`${s.subSection}  ${s.bottomSection}`}>
            <h1 className={s.subMenuHeading}>
              INTEGRATIONS &amp; CUSTOM SOLUTIONS
            </h1>
            <ul className={s.subMenuList}>
              <li className={s.subMenuLink}>
                <img
                  src="./AppMarketplace.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>App Marketplace</h1>
              </li>
              <li className={s.subMenuLink}>
                <img
                  src="./ProfessionalServices.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Professional Services</h1>
              </li>
            </ul>
            <ul className={s.subMenuList}>
              <li className={s.subMenuLink}>
                <img
                  src="./PartnerEcosystem.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Partner Ecosystem</h1>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${s.subMenu} ${index !== 3 && s.hideSubMenu}`}>
          <div className={s.subSection}>
            <ul className={`${s.subMenuList} ${s.spanTwo}`}>
              <li className={s.subMenuLink}>
                <img
                  src="./Documentation.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <div className={s.subTextContainer}>
                  <h1 className={s.subLinkText}>Documentation</h1>
                  <p className={s.secondaryText}>
                    Start integrating Stripes products and tools
                  </p>
                </div>
              </li>
            </ul>
            <ul className={s.secondaryList}>
              <h1 className={s.secondaryListHeading}>GET STARTED</h1>
              <li className={s.secondaryLink}>
                <h1 className={s.secondaryLinkText}>Prebuilt Checkout</h1>
              </li>
              <li className={s.secondaryLink}>
                <h1 className={s.secondaryLinkText}>Libraries and SDKs</h1>
              </li>
              <li className={s.secondaryLink}>
                <h1 className={s.secondaryLinkText}>Plugins</h1>
              </li>
              <li className={s.secondaryLink}>
                <h1 className={s.secondaryLinkText}>Code samplers</h1>
              </li>
            </ul>
            <ul className={s.secondaryList}>
              <h1 className={s.secondaryListHeading}>GUIDES</h1>
              <li className={s.secondaryLink}>
                <h1 className={s.secondaryLinkText}>Accept online payments</h1>
              </li>
              <li className={s.secondaryLink}>
                <h1 className={s.secondaryLinkText}>Manage subscriptions</h1>
              </li>
              <li className={s.secondaryLink}>
                <h1 className={s.secondaryLinkText}>Send payments</h1>
              </li>
              <li className={s.secondaryLink}>
                <h1 className={s.secondaryLinkText}>
                  Set up in-person payments
                </h1>
              </li>
            </ul>
          </div>
          <div className={`${s.subSection}  ${s.bottomSection}`}>
            <ul className={s.subMenuList}>
              <li className={s.subMenuLink}>
                <img
                  src="./FullAPIReference.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Full API Reference</h1>
              </li>
              <li className={s.subMenuLink}>
                <img src="./APIStatus.PNG" alt="" className={s.subLinkIcon} />
                <h1 className={s.subLinkText}>API Status</h1>
              </li>
            </ul>
            <ul className={s.subMenuList}>
              <li className={s.subMenuLink}>
                <img
                  src="./APIChangelog.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>API Changelog</h1>
              </li>
              <li className={s.subMenuLink}>
                <img
                  src="./BuildAStripeApp.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Build A Stripe App</h1>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${s.subMenu} ${index !== 4 && s.hideSubMenu}`}>
          <div className={s.subSection}>
            <ul className={s.subMenuList}>
              <li className={s.subMenuLink}>
                <img
                  src="./SupportCenter.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Support Center</h1>
              </li>
              <li className={s.subMenuLink}>
                <img
                  src="./SupportPlans.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Support Plans</h1>
              </li>
              <li className={s.subMenuLink}>
                <img src="./Guides.PNG" alt="" className={s.subLinkIcon} />
                <h1 className={s.subLinkText}>Guides</h1>
              </li>
              <li className={s.subMenuLink}>
                <img
                  src="./CustomerStories.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Customer Stories</h1>
              </li>
            </ul>
            <ul className={s.subMenuList}>
              <li className={s.subMenuLink}>
                <img src="./Blog.PNG" alt="" className={s.subLinkIcon} />
                <h1 className={s.subLinkText}>Blog</h1>
              </li>
              <li className={s.subMenuLink}>
                <img
                  src="./AnnualConference.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Annual Conference</h1>
              </li>
              <li className={s.subMenuLink}>
                <img
                  src="./ContactSales.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Contact Sales</h1>
              </li>
            </ul>
          </div>
          <div className={`${s.subSection}  ${s.bottomSection}`}>
            <ul className={s.subMenuList}>
              <li className={s.subMenuLink}>
                <img src="./Jobs.PNG" alt="" className={s.subLinkIcon} />
                <h1 className={s.subLinkText}>Jobs</h1>
              </li>
              <li className={s.subMenuLink}>
                <img src="./Newsroom.PNG" alt="" className={s.subLinkIcon} />
                <h1 className={s.subLinkText}>Newsroom</h1>
              </li>
            </ul>
            <ul className={s.subMenuList}>
              <li className={s.subMenuLink}>
                <img src="./StripePress.PNG" alt="" className={s.subLinkIcon} />
                <h1 className={s.subLinkText}>Stripe Press</h1>
              </li>
              <li className={s.subMenuLink}>
                <img
                  src="./BecomeAPartner.PNG"
                  alt=""
                  className={s.subLinkIcon}
                />
                <h1 className={s.subLinkText}>Become a Partner</h1>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import s from "../../styles/developers.module.scss";

export default function Developers() {
  return (
    <div>
      <div className={s.developersBG}></div>
      <div className={s.lineSection}>
        <div className={s.line}></div>
        <div className={s.line}></div>
        <div className={s.line}></div>
        <div className={s.line}></div>
        <div className={s.line}></div>
      </div>
      <div className={s.developersContainer}>
        <div className={s.developersLeftColumn}>
          <h2 className={s.heading}>Designed for developers</h2>
          <h1 className={s.title}>
            The world's most powerful <br /> and easy-to-use APIs
          </h1>
          <p className={s.text}>
            We agonize over the right abstractions so your teams <br />
            don't need to stitch together disparate systems or <br />
            spend months integrating payments functionality.
          </p>
          <button className={s.btn}>
            Read the docs<span className={s.arrow}></span>
          </button>
          <div className={s.extraInfoContainer}>
            <div className={s.extraLeft}>
              <h2 className={s.extraTitle}>Tools for every stack</h2>
              <p className={s.extraText}>
                We offer client and server <br />
                libraries in everything from <br />
                React and PHP to .NET and iOS.
              </p>
              <button className={s.extraBtn}>
                See libraries<span className={s.arrow}></span>
              </button>
            </div>
            <div className={s.extraRight}>
              <h2 className={s.extraTitle}>Prebuilt integrations</h2>
              <p className={s.extraText}>
                Use integrations for systems <br />
                like Shopify, WooCommerce, <br />
                NetSuite, and more.
              </p>
              <button className={s.extraBtn}>
                Explore partners<span className={s.arrow}></span>
              </button>
            </div>
          </div>
        </div>
        <div className={s.developersRightColumn}></div>
      </div>
    </div>
  );
}

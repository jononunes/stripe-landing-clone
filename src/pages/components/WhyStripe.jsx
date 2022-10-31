import s from "../../styles/whyStripe.module.scss";

export default function WhyStripe() {
  return (
    <div>
      <div className={s.whyStripeContainer}>
        <h2 className={s.heading}>Why Stripe</h2>
        <h1 className={s.title}>
          A technology-first approach to payments <br />
          and finance
        </h1>
        <div className={s.columnContainer}>
          <div className={s.column}>
            <h2 className={s.columnHeading}>Close to the metal</h2>
            <p className={s.text}>
              From <a href="#">direct integrations</a> with <br /> card networks
              and banks to <br />
              checkout flows in the browser, <br />
              we operate on and optimize at <br />
              every level of the financial stack.
            </p>
          </div>
          <div className={s.column}>
            <h2 className={s.columnHeading}>Fastest-improving platform</h2>
            <p className={s.text}>
              We release <a href="#"> hundreds of features</a>
              <br /> and improvements each year to
              <br /> help you stay ahead of industry
              <br /> shifts. (On average, we deploy <br />
              our production API 16x per day.)
            </p>
          </div>
          <div className={s.column}>
            <h2 className={s.columnHeading}>Battle-tested reliability</h2>
            <p className={s.text}>
              Our systems operate with <br />
              <a href="#">99.99%+</a> uptime and are highly <br />
              scalable and redundant. Stripe <br />
              is certified to the highest <br />
              compliance standards.
            </p>
          </div>
          <div className={s.column}>
            <h2 className={s.columnHeading}>Intelligent optimizations</h2>
            <p className={s.text}>
              Our machine learning models <br />
              train on <a href="#">billions</a> of data points <br />
              and help increase revenue <br />
              across conversion, fraud, <br />
              revenue recovery, and more.
            </p>
          </div>
        </div>
        <div className={s.stripeLeft}>
          <div className={s.shortStripe}></div>
          <div className={s.longStripe}></div>
        </div>
        <div className={s.stripeRight}>
          <div className={s.longStripe}></div>
          <div className={s.shortStripe}></div>
        </div>
      </div>
    </div>
  );
}

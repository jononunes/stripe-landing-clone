import s from "../../styles/globe.module.scss";

export default function Globe() {
  return (
    <div>
      <div className={s.globeBG}></div>
      <div className={s.globeContainer}>
        <h2 className={s.heading}>Global scale</h2>
        <h1 className={s.title}>
          The backbone for <br />
          internet business
        </h1>
        <p className={s.text}>
          For ambitious companies around the world, Stripe <br />
          makes moving money as simple, borderless, and <br />
          programmable as the rest of the internet. Our <br />
          teams are based in dozens of offices around the <br />
          world and we process hundreds of billions of <br />
          dollars each year for <a href="#">startups to Fortune 500s</a>.
        </p>
        <div className={s.columnContainer}>
          <div className={s.column}>
            <h2 className={s.columnTitle}>250M+</h2>
            <p className={s.columnText}>
              API requests per day peaking at 13,000 requests a second.
            </p>
          </div>
          <div className={s.column}>
            <h2 className={s.columnTitle}>90%</h2>
            <p className={s.columnText}>
              of US adults have bought from <br /> businesses using Stripe.
            </p>
          </div>
          <div className={s.column}>
            <h2 className={s.columnTitle}>135+</h2>
            <p className={s.columnText}>
              currencies and payment <br /> methods supported.
            </p>
          </div>
          <div className={s.column}>
            <h2 className={s.columnTitle}>35+</h2>
            <p className={s.columnText}>
              countries with local aquiring, <br /> optimizing acceptance rates.
            </p>
          </div>
        </div>
      </div>
      <div className={s.globeBGEnd}></div>
    </div>
  );
}

import s from "../../styles/payments.module.scss";

export default function Payments() {
  return (
    <div>
      <div className={s.paymentsContainer}>
        <div className={s.paymentsTextContainer}>
          <h2 className={s.heading}>Unified platform</h2>
          <h1 className={s.title}>
            A fully integrated suite of <br /> payments products
          </h1>
          <div className={s.textContainer}>
            <p className={s.text}>
              We bring together everything that&apos;s required to build <br />{" "}
              websites and apps that accept payments and send payouts <br />{" "}
              globally. Stripe&apos;s products power payments for{" "}
              <a href="#" className={s.link}>
                online and in-
                <br />
                person retailers
              </a>
              ,{" "}
              <a href="#" className={s.link}>
                subscriptions businesses
              </a>
              ,{" "}
              <a href="#" className={s.link}>
                software <br /> platforms and marketplaces
              </a>
              , and everything in between
            </p>
            <p className={s.text}>
              We also help companies{" "}
              <a href="#" className={s.link}>
                beat fraud
              </a>
              ,{" "}
              <a href="#" className={s.link}>
                send invoices
              </a>
              , <br />
              <a href="#" className={s.link}>
                issue virtual and physical cards
              </a>
              ,{" "}
              <a href="#" className={s.link}>
                reduce friction at <br />
                checkout
              </a>
              ,{" "}
              <a href="#" className={s.link}>
                get financing
              </a>
              ,{" "}
              <a href="#" className={s.link}>
                manage business spend
              </a>
              , <br /> and much more.
            </p>
          </div>
          <button className={s.btn}>
            Start with payments<span className={s.arrow}></span>
          </button>
        </div>
        <div className={s.paymentsFiguresContainer}>
          <div className={s.visaCardContainer}>
            <div className={s.visaCardTop}>
              <p className={s.commutifiHeading}>Commutifi</p>
              <p className={s.zestfulHeading}>Zestful</p>
              <p className={s.postmatesHeading}>Postmates</p>
            </div>
            <div className={s.visaCardMiddle}>
              <img
                src="./postmatesimage.png"
                alt=""
                className={s.postmatesImage}
              />
              <img src="./cardchip.png" alt="" className={s.chip} />
              <img
                src="./commutifyimage.png"
                alt=""
                className={s.commutifiImage}
              />
              <img src="./zestfulimage.png" alt="" className={s.zestfulImage} />
            </div>
            <div className={s.visaCardBottom}>
              <p className={s.commutifiName}>Micaela Ballew</p>
              <p className={s.zestfulName}>Thomas Degry</p>
              <p className={s.postmatesName}>Jane Diaz</p>
              <img src="./visalogo.png" alt="" className={s.visaLogo} />
            </div>
          </div>
          <div className={s.invoiceContainer}>
            <div className={s.invoiceBG}></div>
            <div className={s.invoiceCard}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

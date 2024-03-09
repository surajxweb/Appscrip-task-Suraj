"use client";

import styles from "./Footer.module.css";
import Image from "next/image";
import usd from "@/public/images/currency.png";
import socials from "@/public/images/socials.png";
import payments from "@/public/images/payments.png";

const Footer = () => {
  const doSomthingWithTheEmail = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <div className={styles.footer1}>
        <div className={styles.email}>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <form onSubmit={doSomthingWithTheEmail}>
            <input />
            <button>SUBSCRIBE</button>
          </form>
        </div>
        <div className={styles.contact}>
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3>CURRENCY</h3>
          <Image src={usd} height={30} width={110} alt="american dollar" />
          <p className={styles.curr}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <div className={styles.footer2}>
        <div className={styles.links}>
          <h3>mettā muse</h3>
          <div className={styles.links}>
            <div className={styles.link}>About Us</div>
            <div className={styles.link}>Stories</div>
            <div className={styles.link}>Artisans</div>
            <div className={styles.link}>Boutiques</div>
            <div className={styles.link}>Contact Us</div>
            <div className={styles.link}>EU Compliances Docs</div>
          </div>
        </div>
        <div className={styles.morelinks}>
          <h3>QUICK LINKS</h3>
          <div className={styles.links}>
            <div className={styles.link}>Orders & Shipping</div>
            <div className={styles.link}>Join/Login as a Seller</div>
            <div className={styles.link}>Payment & Pricing</div>
            <div className={styles.link}>Return & Refunds</div>
            <div className={styles.link}>FAQs</div>
            <div className={styles.link}>Privacy Policy</div>
            <div className={styles.link}>Terms & Conditions</div>
          </div>
        </div>
        <div className={styles.social}>
          <h3>FOLLOW US</h3>
          <Image src={socials} height={30} width={100} alt="payments" />
          <h3>mettā muse Accepts</h3>
          <Image src={payments} height={30} width={100} alt="payments" />
        </div>
      </div>
      <div className={styles.credit}>
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

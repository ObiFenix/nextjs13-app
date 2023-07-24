import Facebook from "@public/images/social/fb.png";
import Instagram from "@public/images/social/ig.png";
import Twitter from "@public/images/social/twtr.png";
import Youtube from "@public/images/social/yt.png";
import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <p>©2023 ObiFenix. All rights reserved.</p>
      <div className={styles.social}>
        <Image src={Facebook} width={15} height={15} alt="Facebook Icon" />
        <Image src={Instagram} width={15} height={15} alt="Instagram Icon" />
        <Image src={Twitter} width={15} height={15} alt="Twitter Icon" />
        <Image src={Youtube} width={15} height={15} alt="Youtube Icon" />
      </div>
    </div>
  );
}

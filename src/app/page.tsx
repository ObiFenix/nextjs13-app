"use client";
import Hero from "@public/images/hero.png";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@src/components/button/Button";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>
            Better design for your digital products.
          </h1>
          <p className={styles.description}>
            Turning your idea into reality. We bring together the teams from the
            global tech industry.
          </p>
          <Button label="See Our Works" url="/portfolio" />
        </div>
        <div className={styles.item}>
          <Image className={styles.image} src={Hero} alt="Hero" />
        </div>
      </div>
    </div>
  );
}

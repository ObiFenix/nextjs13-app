import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

export default function Button({ label, url }: any) {
  return (
    <Link href={url}>
      <button className={styles.btn}>{label}</button>
    </Link>
  );
}

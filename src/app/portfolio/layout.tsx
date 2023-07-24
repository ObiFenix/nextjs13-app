import React, { ReactNode } from "react";
import styles from "./page.module.css";

export default function Layout({ children }: any) {
  return (
    <div>
      <h1 className={styles.mainTitle}>Portfolio</h1>
      <div>{children}</div>
    </div>
  );
}

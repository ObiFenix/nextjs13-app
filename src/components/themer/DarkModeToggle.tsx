"use client";

import { ThemeContext } from "@src/context/ThemeContext";
import React, { useContext } from "react";
import styles from "./DarModeToggle.module.css";

function DarkModeToggle() {
  const { toggle, mode }: any = useContext(ThemeContext);
  const currentToggledPosition =
    "light" === mode ? { left: ".1rem" } : { right: ".1rem" };

  return (
    <div className={styles.container} onClick={() => toggle()}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔅</div>
      <div className={styles.ball} style={currentToggledPosition} />
    </div>
  );
}

export default DarkModeToggle;
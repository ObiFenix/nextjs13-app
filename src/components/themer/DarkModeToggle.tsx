'use client';

import React, { useContext } from 'react';
import styles from './DarModeToggle.module.css';
import { ThemeContext } from '@src/context/ThemeContext';

function DarkModeToggle() {
  const { toggle, mode }: any = useContext(ThemeContext);
  const currentTheme = "light" === mode ? { left: ".1rem" } : { right: ".1rem" };

  return (
    <div className={styles.container} onClick={() => toggle()}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>☀️</div>
      <div className={styles.ball} style={currentTheme} />
    </div>
  );
}

export default DarkModeToggle;
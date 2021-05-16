import React from 'react';
import NameTag from '../../containers/NameTag';
import styles from './App.css';

export default function App() {
  return (
    <section className={styles.mainArea}>
      <NameTag />
    </section>
  );
}

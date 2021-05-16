import React from 'react';
import Controls from './Controls';
import styles from './Display.css';

export default function Display(props) {
  return (
    <section className={styles.backgroundArea}>
      <div className={styles.tagWrapper}>
        <Controls
          greeting={props.greeting}
          name={props.name}
          onGreetingChange={props.handleChangeGreeting}
          onNameChange={props.handleChangeName}
        />
      </div>
    </section>
  );
}

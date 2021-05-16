import React from 'react';
import Controls from './Controls';

export default function Display(props) {
  return (
    <section className="backgroundArea">
      <div className="tagWrapper">
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

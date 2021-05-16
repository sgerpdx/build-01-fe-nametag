import React from 'react';

export default function Controls(props) {
  return (
    <>
      <form>
        <label>
          Greeting:
          <input
            type="text"
            aria-label="Greeting Input"
            value={props.greeting}
            onChange={props.onGreetingChange}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            aria-label="Name Input"
            value={props.name}
            onChange={props.onNameChange}
          />
        </label>

        {/* <input
          type="submit"
          aria-label="Form Submission Button"
          value="Update Info"
          onSubmit={props.onSubmit}
        /> */}
      </form>
    </>
  );
}

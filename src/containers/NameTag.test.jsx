import React from 'react';
import { render, screen } from '@testing-library/react';
import NameTag from './NameTag';
import userEvent from '@testing-library/user-event';

describe('NameTag file', () => {
  it('reflects user input changes for greeting and name', async () => {
    render(<NameTag />);

    const input = await screen.findByLabelText('Greeting:');
    userEvent.type(input, 'Hello I am');
    userEvent.type(input, 'My Name is');

    const secondInput = await screen.findByLabelText('Name:');
    userEvent.type(secondInput, 'Susan');
    userEvent.type(secondInput, 'Clyde');

    // const goSubmit = await screen.findByRole('button', {
    //     name: 'send-req',
    //   });
    //   userEvent.click(goSubmit);
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';
import { BrowserRouter } from 'react-router-dom';

describe('<Layout />', () => {
  let subject: HTMLElement;

  describe('the buttons', () => {
    it('shows a link to the Arbitrary Page', () => {
      render(
        <BrowserRouter>
          <Layout />
        </BrowserRouter>,
      );
      subject = screen.getByLabelText('Link To Arbitrary Page');

      expect(subject).toBeInTheDocument();
      expect(subject).toHaveTextContent('Arbitrary Page');
    });

    it('shows a link to the Arbitrary Page', () => {
      render(
        <BrowserRouter>
          <Layout />
        </BrowserRouter>,
      );
      subject = screen.getByLabelText('Link To Home Page');

      expect(subject).toBeInTheDocument();
      expect(subject).toHaveTextContent('Home');
    });
  });
});

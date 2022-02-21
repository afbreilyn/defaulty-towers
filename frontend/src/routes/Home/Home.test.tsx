import { render, screen } from '@testing-library/react';
import { Home } from './Home';

describe('<Home />', () => {
  let subject: HTMLElement;

  it('displays basic "home page" text', () => {
    render(<Home />);

    subject= screen.getByText('home page');
    expect(subject).toBeInTheDocument();
  });
});

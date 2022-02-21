import { render, screen } from '@testing-library/react';
import { ArbitraryOtherRoute } from './ArbitraryOtherRoute';

describe('<ArbitraryOtherRoute>', () => {
  let subject: HTMLElement;

  it('displays basic "home page" text', () => {
    render(<ArbitraryOtherRoute />);

    subject= screen.getByText('Arbitrary Route');
    expect(subject).toBeInTheDocument();
  });
})
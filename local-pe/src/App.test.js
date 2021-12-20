import { render, screen } from '@testing-library/react';
import ButtonAppBar from './App';

test('renders learn react link', () => {
  render(<ButtonAppBar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

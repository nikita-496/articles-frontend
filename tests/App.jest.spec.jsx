import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../src/App';
import '@testing-library/jest-dom/extend-expect'

test('renders hellow title', () => {
  render (<App />);
  const titleElement = screen.getByText(/Hello to article/i);
  expect(titleElement).toBeInTheDocument();
});

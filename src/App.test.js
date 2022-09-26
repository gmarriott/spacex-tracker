import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const IntroductionText = getByText('Track all available launches from the SpaceX stations!');
  expect(IntroductionText).toBeInTheDocument();
});

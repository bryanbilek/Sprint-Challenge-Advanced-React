import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('title of the document renders properly', () => {
  const { getByText } = render(<App />);

  const titleH1 = getByText(/usa world cup team!/i)
});

test('darkMode button renders on the page for an user to click', () => {
  const { getByText } = render(<App />)

  const darkModeButton = getByText(/dark mode/i);
});

test('GetData component renders onto the App', () => {
  const { findByText } = render(<App />)

  const getData = findByText(/getdata/i);
});
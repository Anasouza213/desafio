import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

test('App', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

// test('ListaInvestimentos', () => {
//   const tree = renderer.create(<ListaInvestimentos />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

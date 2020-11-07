import React from 'react';
import renderer from 'react-test-renderer';
import ListaInvestimentos from '../src/pages/ListaInvestimentos';
import Utils from '../../utils/utils';
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

test('ListaInvestimentos', () => {
  const tree = renderer.create(<ListaInvestimentos navigation ={navigate}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
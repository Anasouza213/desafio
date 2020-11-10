import React from 'react';
import renderer from 'react-test-renderer';
import ListaInvestimentos from './ListaInvestimentosComponente';
import Utils from '../../utils/utils';
import {StatusBar} from 'react-native';
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
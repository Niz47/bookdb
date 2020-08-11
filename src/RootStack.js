/**
 * Sample React Native App
 * RootStack
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './Home';
import Detail from './components/BookDetail';

const StackNavigator = createStackNavigator({
  HomeScreen: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  DetailScreen: {
    screen: Detail,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(StackNavigator);

/**
 * Sample React Native App
 * Home Page
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
  Platform,
} from 'react-native';
import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';
import Books from './components/BookTab';

const Home = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require('./asset/img/header.png')}
          style={styles.imagebg}
          resizeMode="contain">
          <Text style={styles.title}>Book DB</Text>
        </ImageBackground>
      </View>
      <View style={styles.tabber}>
        <ScrollableTabView
          initialPage={0}
          tabBarActiveTextColor="#00a1cb"
          renderTabBar={() => (
            <DefaultTabBar underlineStyle={{backgroundColor: '#00a1cb'}} />
          )}>
          <Books tabLabel="Books" props={props} />
          {/* <Text tabLabel="BookShop">Book Shops</Text> */}
        </ScrollableTabView>
      </View>
    </View>
  );
};

const width = Dimensions.get('screen').width;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',

    ...Platform.select({
      ios: {
        marginTop: 20,
      },
      android: {
        marginTop: -13,
      },
    }),
  },
  tabber: {
    flex: 1,
    paddingHorizontal: 30,

    ...Platform.select({
      ios: {
        marginTop: width * 0.3,
      },
      android: {
        marginTop: width * 0.3 - 25,
      },
    }),
  },
  imagebg: {
    width: width * 0.4,
    height: width * 0.4,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    marginTop: 25,
    fontWeight: 'bold',
    fontSize: 27,
  },
});

export default Home;

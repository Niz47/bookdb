/**
 * Sample React Native App
 * Book Detail Page
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import * as string from '../asset/string';

const BookDetail = (props) => {
  // const {title, authors, pageCount, previewLink} = props.item;
  console.log('Props in Book Detail');
  const item = props.navigation.state.params.item;
  console.log(item);

  const onOpenLinkToRead = () => {
    Linking.canOpenURL(item.previewLink).then((supported) => {
      if (supported) {
        Linking.openURL(item.previewLink);
      } else {
        Alert.Alert(
          "Don't know how to open " +
            previewLink +
            ". Maybe browser doesn't support.",
        );
      }
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require('../asset/img/header_detail.png')}
        style={{flex: 1, alignItems: 'center'}}
        resizeMode={'stretch'}>
        <View style={styles.image_container}>
          <Image
            source={item.image}
            style={styles.image}
            source={
              item.imageLinks !== undefined
                ? {uri: item.imageLinks.thumbnail}
                : require('../asset/img/defaultimage.jpg')
            }
            resizeMode="cover"
          />
        </View>
        <View style={styles.back}>
          <Ionicons
            name="ios-arrow-back"
            color="white"
            size={35}
            onPress={() => props.navigation.goBack()}
          />
        </View>
      </ImageBackground>
      <ScrollView style={styles.wrapper}>
        <View style={styles.status}>
          <Text style={{color: '#00a1cb'}}>AVALIABLE</Text>
        </View>

        <View>
          <Text style={styles.h2}>Author:</Text>
          <Text style={styles.authors}>
            {item.authors !== undefined ? item.authors : string.NO_INFO}
          </Text>
        </View>

        <View>
          <Text style={styles.title}>{item.title.toUpperCase()}</Text>
        </View>

        <View>
          <Text style={styles.pagenum}>
            Pages:
            {item.pageCount !== undefined ? item.pageCount : '-'}
          </Text>
        </View>

        <View>
          <Text style={styles.h4}>Description:</Text>
          <Text style={styles.textDetail}>
            {item.description !== undefined ? item.description : string.NO_INFO}
          </Text>
        </View>

        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#00a1cb', '#55d7c6']}
          style={styles.button}>
          <TouchableOpacity onPress={onOpenLinkToRead}>
            <Text style={styles.textOrder}>Read Online</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

const height = Dimensions.get('screen').height;
const height_image = height * 0.5 * 0.5;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 40,
    // marginBottom: 30,
  },
  image_container: {
    width: height_image,
    height: height_image,
    marginTop: height_image / 3,
  },
  image: {
    width: '90%',
    height: '110%',
    borderWidth: 10,
    borderColor: '#ffffff70',
    borderRadius: 10,
    alignSelf: 'center',
  },
  back: {
    position: 'absolute',
    left: 0,
    marginTop: 30,
    marginLeft: 15,
  },
  status: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 3,
    borderColor: '#00a1cb',
  },
  h2: {
    color: '#C0C0C0',
    fontSize: 20,
    marginTop: 8,
  },
  h4: {
    color: '#696969',
    fontSize: 18,
    marginTop: 8,
  },
  authors: {
    color: '#00a1cb',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 5,
  },
  title: {
    color: '#3e3c3e',
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 16,
  },
  pagenum: {
    color: '#A9A9A9',
    marginTop: 10,
  },
  textDetail: {
    color: 'gray',
    marginTop: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 80,
    paddingVertical: 10,
    borderRadius: 100,
  },
  textOrder: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default BookDetail;

/**
 * Sample React Native App
 * Books Tab
 */

import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SearchBook from './SearchBook';
// import Detail from './BookDetail';
import * as string from '../asset/string';

const BookTab = (props) => {
  const [searchResult, setSearchResult] = useState([]);

  console.log('Props in BookTab');
  const tmp = props;
  console.log(tmp);

  const getSearchBookResult = (SearchBooks) => {
    setSearchResult(SearchBooks);
    // console.log(SearchBooks);
  };

  const rating = (rate) => {
    let rating = [];
    for (i = 0; i < rate; i++) {
      rating.push(
        <Image
          source={require('../asset/img/star.png')}
          style={{width: 15, height: 15, marginRight: 3}}
          resizeMode="cover"
        />,
      );
    }
    return rating;
  };

  // let i = 1;
  const renderItems = ({item}) => {
    // console.log(i++);
    // console.log(item);
    return (
      <LinearGradient
        colors={['#00a1cb', '#55d7c6']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        style={styles.item}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={
              item.imageLinks !== undefined
                ? {uri: item.imageLinks.thumbnail}
                : require('../asset/img/defaultimage.jpg')
            }
            resizeMode="center"
          />
          <View style={styles.rating}>{rating(item.averageRating)}</View>
        </View>
        <View style={styles.context}>
          <Text style={styles.title}>{item.title}</Text>

          <Text style={styles.author}>
            {item.authors !== undefined || item.authors > 0
              ? item.authors
              : string.NO_INFO}
          </Text>

          <View style={styles.pages_container}>
            <View style={styles.pages}>
              <Text style={styles.txtInfo}>
                Pages: {item.pageCount !== undefined ? item.pageCount : '-'}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            props.props.navigation.navigate('DetailScreen', {
              item: item,
              // title: item.title,
              // authors: item.authors,
              // rating: item.averageRating,
              // category: item.categories,
              // description: item.description,
              // pageCount: item.pageCount,
              // imageLinks: item.imageLinks,
              // previewLink: item.previewLink,
            })
          }>
          <AntDesign name="arrowright" color="#00a1cb" size={15} />
        </TouchableOpacity>
      </LinearGradient>
    );
  };

  ItemSeparatorComponent = () => {
    return <View style={{height: 10}}></View>;
  };

  return (
    <View style={styles.container}>
      <SearchBook
        callBackSearchResult={getSearchBookResult}
        // typeName={typeName}
      />

      <View style={styles.flatList}>
        <FlatList
          data={
            !(searchResult === undefined || searchResult.length === 0)
              ? searchResult
              : []
          }
          keyboardShouldPersistTaps="handled"
          renderItem={renderItems}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.ItemSeparatorComponent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  flatList: {
    flex: 1,
    // marginTop: 5,
  },
  item: {
    flex: 1,
    minHeight: 140,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  imageContainer: {
    width: 90,
    height: 90,
  },
  image: {
    width: '90%',
    height: '100%',
    borderWidth: 1,
    borderColor: '#e7edec',
    borderRadius: 2,
    backgroundColor: '#e7edec60',
  },
  context: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  author: {
    color: '#007998',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pages_container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  pages: {
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  txtInfo: {
    color: '#00a1cb',
    fontSize: 10,
    fontWeight: '500',
  },
  rating: {
    marginLeft: -5,
    marginTop: 7,
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

export default BookTab;

/**
 * Sample React Native App
 * Search bar
 */

import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  View,
  TextInput,
  Alert,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as string from '../asset/string';
import * as booksAPI from '../services/booksapi/API';

const SearchBook = (props) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [itemsInfo, setItemsInfo] = useState('');

  useEffect(() => {
    setLoading(true);
    getBooks();
  }, [getBooks, input]);

  useEffect(() => {
    setLoading(false);
  }, [itemsInfo]);

  const getBooks = async () => {
    try {
      const responseJson = await booksAPI.getAllEbooks(input);
      if (responseJson.items !== undefined) {
        const volumeItem = setItemsVolumeInfo(responseJson.items);
        setItemsInfo(volumeItem);
        props.callBackSearchResult(volumeItem);
      } else {
        props.callBackSearchResult([]);
        console.log(string.API_ERROR);
      }
    } catch (error) {
      console.log(error);
      Alert.alert(error.toString());
    }
  };

  const setItemsVolumeInfo = (allItems) => {
    return allItems.map((itemInfo) => {
      return itemInfo.volumeInfo;
    });
  };

  const onSearchStoreItems = (textInput) => {
    setInput(textInput);
    console.log('input text >>>>>>>> ');
    console.log(input);
  };

  return (
    <>
      <View style={styles.section}>
        <TextInput
          placeholder="Search.."
          style={{flex: 1, marginLeft: 10}}
          value={input}
          onChangeText={onSearchStoreItems}
        />

        <TouchableOpacity
          onPress={() => setInput('')}
          style={{paddingHorizontal: 10}}>
          <Ionicons name="ios-close" color="gray" size={20} />
        </TouchableOpacity>
      </View>

      <ActivityIndicator animating={loading} />
    </>
  );
};
const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    backgroundColor: '#f2f2f2',
    marginTop: 10,
  },
});

export default SearchBook;

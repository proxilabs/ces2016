import React from 'react';

import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import SearchArticle from './SearchArticle';
import ArticleList from './ArticleList';


const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: 64,
  },
  list: {
    marginTop: 20,
  },
});

const Home =
    () => (
      <ScrollView style={styles.view}>
        <SearchArticle />
        <View style={styles.list}>
          <ArticleList />
        </View>
      </ScrollView>
    );

export default Home;

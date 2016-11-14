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
    marginLeft: 16,
    marginRight: 16,
  },
  list: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    paddingBottom: 20,
  },
});

const Home =
    () => (
      <ScrollView style={styles.view}>
        <Text style={styles.title}>Rechercher un flux RSS</Text>

        <SearchArticle />
        <View style={styles.list}>
          <ArticleList />
        </View>
      </ScrollView>
    );

export default Home;

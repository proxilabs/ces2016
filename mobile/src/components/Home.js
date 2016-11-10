import React from 'react';

import {
    ScrollView,
    Text,
} from 'react-native';

import SearchArticle from './SearchArticle';
import ArticleList from './ArticleList';

const Home =
    () => (
      <ScrollView style={{ flex: 1, marginTop: 64 }}>
        <Text>Rechercher un flux RSS</Text>

        <SearchArticle />
        <ArticleList />

      </ScrollView>
    );

export default Home;

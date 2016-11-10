import React from 'react';

import { 
    ScrollView,
    Text
} from 'react-native';

import SearchArticle from './SearchArticle';
import ArticleList from './ArticleList';

const Home =
    () => (
      <ScrollView>
        <Text>Rechercher un flux RSS</Text>

        <SearchArticle />
        <ArticleList />

      </ScrollView>
    );

export default Home;
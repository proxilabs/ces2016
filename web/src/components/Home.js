import React from 'react';

import { connect } from 'react-redux';

import SearchArticle from './SearchArticle';
import ArticleList from './ArticleList';

const Home =
    () => (
      <div>
        <h1>Feed RSS</h1>

        <SearchArticle />

        <ArticleList />

      </div>
    );

export default connect()(Home);

import React from 'react';
import SearchArticle from './SearchArticle';
import ArticleList from './ArticleList';

const Home =
    () => (
      <div className="app__content">
        <SearchArticle />
        <ArticleList />
      </div>
    );

export default Home;

import React from 'react';

import { connect } from 'react-redux';

import { ListView } from 'react-native';

import ArticleListItem from './ArticleListItem';

function mapStateToProps(state) {
  return {
    articles: state.articles,
  };
}

const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

function createDatasource(articles) {
    return dataSource.cloneWithRows(articles.slice()),
}

const ArticleList =
    ({ articles }) => (
        <ListView
            dataSource={createDatasource(articles)}
            renderRow={(article) => <ArticleListItem article="article"/>}
        />
    );

ArticleList.propTypes = {
  articles: React.PropTypes.arrayOf(
      React.PropTypes.shape()
  ).isRequired,
};

export default connect(mapStateToProps)(ArticleList);

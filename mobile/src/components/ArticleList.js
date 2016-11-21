import React from 'react';
import { connect } from 'react-redux';
import { ListView, ActivityIndicator, View, StyleSheet, Text } from 'react-native';
import ArticleListItem from './ArticleListItem';

function mapStateToProps(state) {
  return {
    articles: state.articles,
    error: state.error,
    isFetching: state.isFetching,
  };
}

const dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

function createDatasource(articles) {
  return dataSource.cloneWithRows(articles.slice());
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginTop: 56,
  },
  error: {
    color: '#D50000',
  },
});

const ArticleList =
    ({ articles, isFetching, error }) => (
      error ?
        <View style={styles.view}>
          <Text style={styles.error}>{error}</Text>
        </View>
      :
      (isFetching ?
        <View style={styles.view}>
          <ActivityIndicator size="large" color="#4CAF50" />
        </View>
      :
      <ListView
        style={styles.content}
        dataSource={createDatasource(articles)}
        renderRow={article => <ArticleListItem {...article} />}
      />
    ));

ArticleList.propTypes = {
  articles: React.PropTypes.arrayOf(
      React.PropTypes.shape()
  ).isRequired,
  isFetching: React.PropTypes.bool,
  error: React.PropTypes.string,
};

export default connect(mapStateToProps)(ArticleList);

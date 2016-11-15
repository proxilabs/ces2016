import React from 'react';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { web } from 'react-native-communications';

function mapStateToProps(state, props) {
  return {
    article: state.articles.find(a => a.id === props.navigationState.articleId) || {},
  };
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: 64,
    marginLeft: 16,
    marginRight: 16,
  },
  title: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 16,
    marginBottom: 16,
  },
  meta: {
    marginBottom: 16,
  },
  summary: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 16,
  },
});

const ArticleDetail =
    ({ article: { title, link: { href }, updated, summary, author: { name, uri } } }) => (
      <ScrollView style={styles.view}>
        <TouchableOpacity onPress={() => web(href)}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
        <View style={styles.meta}>
          <Text>Auteur : </Text>
          <TouchableOpacity onPress={() => web(uri)}>
            <Text>{name}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.meta}>
          <Text>Date de mise à jour : </Text>
          <Text>{updated}</Text>
        </View>
        <View>
          <Text>Résumé : </Text>
          <Text style={styles.summary}>{summary}</Text>
        </View>
      </ScrollView>
    );

ArticleDetail.propTypes = {
  article: React.PropTypes.shape({
    title: React.PropTypes.string,
    link: React.PropTypes.shape({
      href: React.PropTypes.string,
    }),
    updated: React.PropTypes.string,
    summary: React.PropTypes.string,
    author: React.PropTypes.shape({
      name: React.PropTypes.string,
      uri: React.PropTypes.string,
    }),
  }),
};

export default connect(mapStateToProps)(ArticleDetail);

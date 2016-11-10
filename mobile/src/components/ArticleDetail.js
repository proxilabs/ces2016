import React from 'react';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

function mapStateToProps(state, props) {
  return {
    article: state.articles.find(a => a.id === props.params.articleId) || {},
  };
}

// TODO add real links

const ArticleDetail =
    ({ article: { title, link: { href }, updated, summary, author: { name, uri } } }) => (
      <View>
        <Text>{title} ({href})</Text>
        <View>
          <Text>Auteur : </Text>
          <Text>{name} ({uri})</Text>
        </View>
        <View>
          <Text>Date de mise à jour : </Text>
          <Text>{updated}</Text>
        </View>
        <View>
          <Text>Sommaire : </Text>
          <Text>{summary}</Text>
        </View>
        <TouchableOpacity onPress={Actions.home} />
      </View>
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

import React from 'react';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
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

// TODO add real links

const ArticleDetail =
    ({ article: { title, link: { href }, updated, summary, author: { name, uri } } }) => (
      <View>
        <TouchableOpacity onPress={() => web(href)}>
          <Text>{title}</Text>
        </TouchableOpacity>
        <View>
          <Text>Auteur : </Text>
          <TouchableOpacity onPress={() => web(uri)}>
            <Text>{name}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Date de mise à jour : </Text>
          <Text>{updated}</Text>
        </View>
        <View>
          <Text>Sommaire : </Text>
          <Text>{summary}</Text>
        </View>
        <TouchableOpacity onPress={Actions.home}>
          <Text>Retour</Text>
        </TouchableOpacity>
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

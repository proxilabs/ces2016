import React from 'react';
import moment from 'moment';
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
    article: state.articles.find(a => a.guid === props.navigationState.articleId) || {},
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
  metacontainer: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  meta: {
    color: 'rgba(0,0,0,0.54)',
  },
  summary: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 16,
  },
});

const ArticleDetail =
    ({ article: { title, link, date, summary, author } }) => (
      <ScrollView style={styles.view}>
        <TouchableOpacity onPress={() => web(link)}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
        <View style={styles.metacontainer}>
          <Text style={styles.meta}>{author}</Text>
          <Text style={styles.meta}>{moment(date).format('L')}</Text>
        </View>
        <View>
          <Text style={styles.summary}>{summary}</Text>
        </View>
      </ScrollView>
    );

ArticleDetail.propTypes = {
  article: React.PropTypes.shape({
    title: React.PropTypes.string,
    link: React.PropTypes.string,
    date: React.PropTypes.date,
    summary: React.PropTypes.string,
    author: React.PropTypes.string,
  }),
};

export default connect(mapStateToProps)(ArticleDetail);

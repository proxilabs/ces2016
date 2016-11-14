import React from 'react';

import { Actions } from 'react-native-router-flux';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

// TODO add arrow-right

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    height: 52,
  },
  content: {
    flex: 11,
  },
  icon: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

const ArticleListItem =
    article => (
      <TouchableOpacity
        style={styles.item}
        onPress={() => Actions.articledetail({ articleId: article.id })}
      >
        <Text style={styles.content}>{article.title}</Text>
        <Text style={styles.icon}>></Text>
      </TouchableOpacity>
    );

export default ArticleListItem;

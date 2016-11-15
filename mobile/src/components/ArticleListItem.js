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
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.12)',
  },
  text: {
    margin: 16,
  },
});

const ArticleListItem =
    article => (
      <TouchableOpacity
        style={styles.item}
        onPress={() => Actions.articledetail({ articleId: article.id })}
      >
        <Text
          style={styles.text}
          ellipsizeMode="tail"
          numberOfLines={1}
        >{article.title}</Text>
      </TouchableOpacity>
    );

export default ArticleListItem;

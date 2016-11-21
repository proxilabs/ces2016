import React from 'react';
import { Actions } from 'react-native-router-flux';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  item: {
    height: 72,
    borderBottomWidth: 1,
    padding: 16,
    borderColor: 'rgba(0, 0, 0, 0.12)',
  },
  title: {
    color: 'rgba(0,0,0,0.87)',
    fontSize: 16,
  },
});

const ArticleListItem =
    article => (
      <TouchableOpacity
        style={styles.item}
        onPress={() => Actions.articledetail({ articleId: article.guid })}
      >
        <Text
          style={styles.title}
          ellipsizeMode="tail"
          numberOfLines={1}
        >{article.title}</Text>
        <Text
          style={styles.summary}
          ellipsizeMode="tail"
          numberOfLines={1}
        >{article.summary}</Text>
      </TouchableOpacity>
    );

export default ArticleListItem;

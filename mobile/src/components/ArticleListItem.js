import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';

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
    fontWeight: 'bold',
  },
  summary: {
    color: 'rgba(0,0,0,0.54)',
  },
});

const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

const ArticleListItem =
    article => (
      <Touchable
        onPress={() => Actions.articledetail({ articleId: article.guid })}
      >
        <View style={styles.item}>
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
        </View>
      </Touchable>
    );

export default ArticleListItem;

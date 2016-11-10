import React from 'react';

import { Actions } from 'react-native-router-flux';

import {
    Text,
    TouchableOpacity,
} from 'react-native';

// TODO add arrow-right

const ArticleListItem =
    article => (
      <TouchableOpacity onPress={() => Actions.articledetail({ articleId: article.id })}>
          <Text>{article.title} ></Text>
      </TouchableOpacity>
    );

export default ArticleListItem;

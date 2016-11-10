import React from 'react';

import { Actions } from 'react-native-router-flux';

import { 
    Text, 
    TouchableOpacity 
} from 'react-native';

//TODO add arrow-right 

const ArticleListItem =
    (article) => (
        <TouchableOpacity onPress={Actions.articledetail(article.id)}>
            <Text>{article.name} ></Text>
        </TouchableOpacity>
    );

export default connect()(ArticleListItem);
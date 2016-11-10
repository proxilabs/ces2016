import React from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    articles: state.articles,
  };
}

const ArticleList =
    ({ articles }) => (
      <ul>
        {
            articles.map(article => (
              <li key={article.id}>
                <Link to={`/article/${encodeURIComponent(article.id)}`}>{article.title}</Link>
              </li>
            ))
        }
      </ul>
    );

ArticleList.propTypes = {
  articles: React.PropTypes.arrayOf(
      React.PropTypes.shape()
  ).isRequired,
};

export default connect(mapStateToProps)(ArticleList);

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
      articles.length > 0 ?
        <ul className="articles">
          {
              articles.map(article => (
                <li key={article.id} className="articles__item">
                  <Link to={`/article/${encodeURIComponent(article.guid)}`}>{article.title}</Link>
                </li>
              ))
          }
        </ul>
      : null
    );

ArticleList.propTypes = {
  articles: React.PropTypes.arrayOf(
      React.PropTypes.shape()
  ).isRequired,
};

export default connect(mapStateToProps)(ArticleList);

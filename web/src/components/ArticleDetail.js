import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router';

function mapStateToProps(state, props) {
  return {
    article: state.articles.find(a => a.guid === props.params.articleId) || {},
  };
}

const ArticleDetail =
    ({ article: { title, link, date, summary, author } }) => (
      <div className="app__content article">
        <Link to="/">Retour</Link>
        <h1 className="article__title">
          <a href={link} rel="noopener noreferrer" target="_blank">{title}</a>
        </h1>
        <div className="article__meta">
          <span>Auteur : </span>
          <span>{author}</span>
        </div>
        <div className="article__meta">
          <span>Date de mise à jour : </span>
          <span>{date}</span>
        </div>
        <div className="article__summary">
          <span>Résumé : </span>
          <span>{summary}</span>
        </div>
      </div>
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

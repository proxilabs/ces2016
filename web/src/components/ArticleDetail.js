import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router';

function mapStateToProps(state, props) {
  return {
    article: state.articles.find(a => a.id === props.params.articleId) || {},
  };
}

const ArticleDetail =
    ({ article: { title, link: { href }, updated, summary, author: { name, uri } } }) => (
      <div>
        <h1><a href={href} rel="noopener noreferrer" target="_blank">{title}</a></h1>
        <div>
          <span>Auteur : </span>
          <span><a href={uri} rel="noopener noreferrer" target="_blank">{name}</a></span>
        </div>
        <div>
          <span>Date de mise à jour : </span>
          <span>{updated}</span>
        </div>
        <div>
          <span>Sommaire : </span>
          <span>{summary}</span>
        </div>
        <Link to="/">Retour</Link>
      </div>
    );

ArticleDetail.propTypes = {
  article: React.PropTypes.shape({
    title: React.PropTypes.string,
    link: React.PropTypes.shape({
      href: React.PropTypes.string,
    }),
    updated: React.PropTypes.string,
    summary: React.PropTypes.string,
    author: React.PropTypes.shape({
      name: React.PropTypes.string,
      uri: React.PropTypes.string,
    }),
  }),
};

export default connect(mapStateToProps)(ArticleDetail);

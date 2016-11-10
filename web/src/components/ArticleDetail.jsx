import React from 'react';

import { connect } from 'react-redux';

const ArticleDetail =
    ({ params: { articleId } }) => (
      <div>
        <h1>{articleId}</h1>
      </div>
    );

ArticleDetail.propTypes = {
  params: React.PropTypes.shape({
    articleId: React.PropTypes.number,
  }),
};

export default connect()(ArticleDetail);

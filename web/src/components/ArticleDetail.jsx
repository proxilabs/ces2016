import React from 'react';

import { connect } from 'react-redux';

const ArticleDetail =
    ({ params: { articleId } }) => (
      <div>
        <h1>{articleId}</h1>
      </div>
    );

export default connect()(ArticleDetail);

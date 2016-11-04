import React from 'react';

const ArticleDetail =
    ({ params: { articleId } }) => (
      <div>
        <h1>{articleId}</h1>
      </div>
    );

export default ArticleDetail;

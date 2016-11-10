import React from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';

const ArticleList =
    ({ articles }) => (
      <ul>
        <li>
          <Link to={'/article/22'}>Article 22</Link>
        </li>
      </ul>
    );

ArticleList.propTypes = {
  articles: React.PropTypes.arrayOf({
    id: React.PropTypes.integer,
  }),
};
export default connect()(ArticleList);

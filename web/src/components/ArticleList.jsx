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

export default connect()(ArticleList);

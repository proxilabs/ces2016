import React from 'react';
import Link from 'react-router';

const Home =
    () => (
      <div>
        <h1>Accueil</h1>
        <Link to={'/article/12'}>Article 12</Link>
      </div>
    );

export default connect()(Home);
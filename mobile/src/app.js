// Représente le composant racine de l'application mobile.'
import React from 'react';
import { Provider } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';
import { StatusBar } from 'react-native';

import { createStore } from 'shared';

import Home from './components/Home';
import ArticleDetail from './components/ArticleDetail';

// On demande la création de notre store applicatif.
const store = createStore();

/**
 * Lance l'application RN.
 *
 * @export
 * @returns Bootstrap l'application React Native
 */
export default function run() {
  // On encapsule notre composant racine dans le Provider pour passage du store en tant que contexte
  const App = () => (
    <Provider store={store}>
      <StatusBar backgroundColor="transparent" animated translucent barStyle="light-content" />
      <Router>
        <Scene key="root">
          <Scene key="home" initial component={Home} title="Feed RSS" />
          <Scene key="articledetail" component={ArticleDetail} title="Article" />
        </Scene>
      </Router>
    </Provider>
    );

  return () => App;
}

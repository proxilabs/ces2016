// Représente le composant racine de l'application mobile.'
import React from 'react';
import { Provider } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';
import { StatusBar, StyleSheet, View, Platform } from 'react-native';
import { createStore } from 'shared';
import Home from './components/Home';
import ArticleDetail from './components/ArticleDetail';
import ArticleList from './components/ArticleList';
import SearchNavBar from './components/SearchNavBar';
import DetailNavBar from './components/DetailNavBar';

// On demande la création de notre store applicatif.
const store = createStore();

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

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
      <View style={styles.main}>
        <StatusBar backgroundColor="#43A047" animated barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} />
        <Router>
          <Scene key="root">
            <Scene key="home" navBar={SearchNavBar} initial component={ArticleList} />
            <Scene
              key="articledetail"
              navBar={DetailNavBar}
              component={ArticleDetail}
              title="Article"
              backTitle="Retour"
            />
          </Scene>
        </Router>
      </View>
    </Provider>
    );

  return () => App;
}

# CES2016 - Mobile

## Développement

Un petit `npm i` dans ce répertoire puis `react-native run-android` ou `react-native run-ios`.

## Pourquoi pas de `npm link shared` ?

Le lien avec le package `shared` est ici fait grâce au chemin relatif et non en tant que lien symbolique. Ce qui signifie qu'en cas de modification du package `shared`, il faudra relancer un `npm i -f shared` pour le mettre à jour dans ce projet. Tout ceci est dû au fichier `.babelrc` du projet `shared` qui se trouve être lu par le packager React Native.
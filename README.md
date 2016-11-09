# Devenir Natif avec React

Ce dépôt contient le code source nécessaire pour la présentation donnée à Codeurs en Seine le **24 Novembre 2016**.

## Objectif

La démo doit permettre de s'abonner à des flux RSS depuis une version Web + Mobile avec du code partagé.

## Développement

De manière à mettre en place l'environnement de dév, dans le dossier `shared/`, il faut lancer la commande `npm link` qui permettra de mettre en place un symlink. Ensuite, de manière à ce que les paquets dépendants de shared puissent y'accéder, en va dans `web/` et on lance `npm link shared`.

Ensuite, il vous suffit de lancer les commandes `npm install` et `npm start` dans chaque répertoire.

## Organisation des sources

- `shared/`: Code commun sous forme de **package npm** et importé depuis les autres packages,
- `web/`: Code spécifique à la version web,
- `mobile/`: Code source de l'application mobile sous React Native.
- `server/`: Code source pour le serveur de la démo.

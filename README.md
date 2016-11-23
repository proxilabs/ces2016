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

## Le jour J

- Créer un point d'accès Wifi
- Connecter le MAC
- Connecter l'iPhone
- Connecter l'Android
- Vérifier l'ip du MAC et la reporter:
    - ces2016/
        - shared/src
            - parse.js
        - server/src
            - index.js
        - mobile/ios/xcode
            - AppDelegate.m

    npm i -f shared dans mobile/

    On lance un npm start + exec xcode sur iOS pour pousser le nouveau bundle avec les nouvelles ips, ensuite on le stoppe pour éviter les mauvaises surprises.

    Pendant ce temps, on lance le npm start dans /samples_mobile en mode debug et live reload

    Demarrage du serveur npm start sans /server

    Démarrage de l'appli web npm start dans web/
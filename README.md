# PROJET Charles Cantin
Site vitrine Charles Cantin
<br/>
Ce document est un guide de déploiement et un manuel d'utilisation 
pour l'application TRT-CONSEIL dévéloppée dans le cadre de l'ECF d'entrainement ayant pour titre:
<br/>
**Développer la partie front-end d’une application web**

de l'école STUDI.
<br/>
Selon le cahier des charges l'application demandée devra être un site
vitrine pour un photographe qui veut dévelloper son activité.
Ce site est la partie front-end du projet
------

# Fonctionnalités de l'application

1. ## Une page d’accueil :


* Charles aimerait qu’une image prenne toute la taille de l’écran.
* Le texte “Charles Cantin - Photographe” devra être centré verticalement et
horizontalement.

2. ## Une page galerie : 

* Ici, nous retrouverons les photographies que Charles souhaiterait mettre en valeur.
* Chaque image fera partie d’une catégorie (voir annexes en fin de document).
horizontalement.
* Un système de filtre dynamique doit permettre d’afficher les photos d’une catégorie en
particulier sans avoir à recharger la page.

3. ## Une page “tarifs et prestations” :
* Chaque prestation possède un titre, une petite description et un tarif (voir annexes en fin
de document).

4. ## Une page “tarifs et prestations” :
* Un formulaire fonctionnel doit permettre de le contacter. Vous pouvez utiliser un service
gratuit comme le plan starter de https://formspree.io/, ou profiter de netlify forms si vous choisissez cet hébergeur.

5. ## Fonctionnalités générales :
* Depuis chacune des pages, une barre de navigation devra être disponible avec le menu ainsi que les icônes Facebook et Instagram (pour un lien vers son profil sur les réseaux sociaux à l’avenir).

* Tout contenu devra être modifiable facilement par Charles à l’aide d’un CMS.
Pour qu’il puisse apprécier le rendu du site avant de pouvoir le personnaliser, vous pouvez récupérer les images sur Pixabay (https://pixabay.com/fr/).

------

# Tech Stack

**Client:** Css, Html, Bootstrap, react js, nodeJs

**Server:** Strapi,

**Sql:** PostGres

------

# Installation de l'environement

## Les pré-requis 

### L'installation nécessite que les logiciels suivants soient déjà installés sur votre ordinateur :

* [Node.js](https://nodejs.org/en/) (ouvre une nouvelle fenêtre): seules les versions LTS sont supportées (v14 et v16). D'autres versions de Node.js peuvent ne pas être compatibles avec la dernière version de Strapi. La version 16.x est la plus recommandée par Strapi.
* npm [npm](https://docs.npmjs.com/cli/v6/commands/npm-install)(ouvre une nouvelle fenêtre)(v6 uniquement) ou fil (ouvre une nouvelle fenêtre)pour exécuter les scripts d'installation CLI.

### création d'une application REACT :
Create React App est un moyen officiellement pris en charge pour créer des applications React d'une seule page. Il offre une configuration de construction moderne sans configuration.

```Terminal 
$ npx create-react-app my-app
$ cd my-app
$ npm start

```
ou si vous avez yarn installez sur votre ordinateur:
```Terminal 
$ yarn create react-app my-app
$ cd my-app
$ npm start

```
Ouvrez ensuite http://localhost:3000/ pour voir votre application.

------

# Premiers pas avec l'application Create React

Ce projet a démarré avec [Create React App](https://github.com/facebook/create-react-app).

## Scénarios disponibles

Dans le répertoire du projet, vous pouvez exécuter :

### `npm start`

Exécutez l'application en mode développement.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

La page se rechargera lorsque vous apporterez des modifications.\
Vous pouvez également voir des erreurs de charpie dans la console.

### `npm test`

Lance le testeur en mode montre interactive.\
Voir la rubrique sur [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Construit l'application pour la production dans le dossier "build"\
Il regroupe correctement React en mode production et optimise la construction pour les meilleures performances.

La construction est minifiée et les noms de fichiers incluent les hachages..\
Votre application est prête à être déployée !

Voir la rubrique sur [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Remarque : il s'agit d'une opération à sens unique. Une fois que vous avez "éjecté", vous ne pouvez plus revenir en arrière !**

Si vous n'êtes pas satisfait de l'outil de construction et des choix de configuration, vous pouvez "éjecter" à tout moment. Cette commande supprimera la dépendance de construction unique de votre projet.

Au lieu de cela, il copiera tous les fichiers de configuration et les dépendances transitives (webpack, Babel, ESLint, etc.) directement dans votre projet afin que vous ayez un contrôle total sur eux. Toutes les commandes sauf `eject` fonctionneront toujours, mais elles pointeront vers les scripts copiés afin que vous puissiez les modifier. À ce stade, vous êtes seul.

Vous n'avez jamais besoin d'utiliser `eject`. L'ensemble de fonctionnalités organisé convient aux déploiements de petites et moyennes tailles, et vous ne devriez pas vous sentir obligé d'utiliser cette fonctionnalité. Cependant, nous comprenons que cet outil ne serait pas utile si vous ne pouviez pas le personnaliser lorsque vous êtes prêt.

## Apprendre encore plus

Vous pouvez en savoir plus dans le [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Pour apprendre React, consultez le [React documentation](https://reactjs.org/).

### Code Splitting

Pour apprendre React, consultez le [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

Pour apprendre React, consultez le: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)



### Deployment

Cette section a été déplacée ici : [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

Cette section a été déplacée ici : [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

------

# Installation de  l'environnement GIT

Se connecter sur le serveur GITHUB et créer un repositories.

## Initialiser votre dépot et créer votre premier commit
* git init
* git add README.md
* git commit -m "first commit"
* git branch -M main
* git remote add origin https://github.com/NOA-FASHION/charles-cantin.git

## Synchroniser le sur votre serveur GITHUB.
git push -u origin main

------

# Déploiement de l'application
Le déploiement à été éffectué sur ghitub

## prérequis 

### Installez le package gh-pages en tant que « dev-dependency » de l’application. 

```Terminal 
$ npm install --save gh-pages
```

### Ajoutez des propriétés au fichier package.json de l’application.


```package.json
"homepage": "http://charle-cantin.github.io/my-app", 
"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  //...
  "build": "react-scripts build && cp build/index.html build/404.html", // this will prevent page reloads to give a  404 error
}
```

votre fichier package.json devra ressembler à ceci:
```package.json
{
  "name": "charles-cantin",
  "version": "0.1.0",
  "private": true,
  "homepage": "http://malmont.github.io/front-charles-cantin", 
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^0.27.2",
    "bootstrap": "^5.2.0",
    "gh-pages": "^4.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.4.0",
    "react-router-dom": "^6.3.0",
    "react-scripts": "^5.0.1",
    "react-spring": "^9.5.2",
    "react-waypoint": "^10.3.0",
    "styled-components": "^5.3.5",
    "uuidv4": "^6.2.13",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

```

 ### modifier les balises du routeur react-router-dom en :
```ReactJs
 <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
```

## Déploiement de l'application sur ghitub

### exécuter la commande suivante:

```Terminal 
$ npm run deploy
```

### visiter le site à l'adresse :
https://malmont.github.io/front-charles-cantin/


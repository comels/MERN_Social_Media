# MERN Social Media APP
*React / Express / MongoDB / Redux*


[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)  [![forthebadge](http://forthebadge.com/images/badges/powered-by-electricity.svg)](http://forthebadge.com)

Projet de fin de cycle de l'école Holberton. C'est un réseau siciale basé sur la stack MERN : MongoDb, Express, React, Node.js

### Pré-requis

Installer une instance d'un projet React `npx create-react-app simple-react-app`

### Installation

Installer les package.json dans la racine du projet et dans `/client` avec `$ nmp install`
_____________________________

### Back config :

* Mettez vos informations de cluster dans `/config/db.js`
* Créez le fichier `.env` dans `/config/` dans les données suivantes
   - PORT=5000 `votre port localhost`
   - CLIENT_URL=http://localhost:3000 `votre URL client`
   - DB_USER_PASS=id:motdepasse `votre identifiant et mot de passe`
   - TOKEN_SECRET=990bf68e6adf1be5f1671bba3bec692056922454 `votre clé secrète aléatoire`
_________________________
  
### Front config : 
* Créez un fichier `.env` dans l'URL du serveur :
   - REACT_APP_API_URL=http://localhost:5000/ `l'url de votre serveur`
_____________________________

## Démarrage

Démarrer le server : npm start

Démarrer le front : cd client + npm start

## Fabriqué avec



## Back-end :

**MongoDB** : MongoDB is a schema-less NoSQL document database. It means you can store JSON documents in it, and the structure of these documents can vary as it is not enforced like SQL databases. This is one of the advantages of using NoSQL as it speeds up application development and reduces the complexity of deployments.

**Mongoose** : Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

**Nodemon**: Nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

**Bcrypt**: A library to help you hash passwords.

**Body-parser**: Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

**Cookie-parser** : Parse Cookie header and populate req.cookies with an object keyed by the cookie names. Optionally you may enable signed cookie support by passing a secret string, which assigns req.secret so it may be used by other middleware.

**Dotenv** : Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

**Express** : provide small, robust tooling for HTTP. Fast, unopinionated, minimalist web framework for node.

**Jsonwebtoken** : JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties. JWT.IO allows you to decode, verify and generate JWT.

**Validator**: A library of string validators and sanitizers.

  

## Front-end :

**React** : A JavaScript library for creating user interfaces.

**Redux** : It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

**Dart saas** : stylesheet preprocessor. It allows you to natively compile .scss files to css at incredible speed and automatically via a connect middleware.

## Auteurs
Listez le(s) auteur(s) du projet ici !
* **[Raphaël Chemouni](https://www.linkedin.com/in/raphael-chemouni/)** _alias_ [@rafyc](https://github.com/rafyc) on Github
* **[Côme Le Sauter](https://www.linkedin.com/in/comels)** _alias_ [@comels](https://github.com/comels) on Github


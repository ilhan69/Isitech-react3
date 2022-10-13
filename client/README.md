# Projet React B3
Projet déployé sur netlify : https://ilhan-isitechreact3.netlify.app/login

## Installation

Après avoir cloné le projet, 

    cd client 
    npm install
    npm start

## Structuration du projet

|Nom du dossier|Définition  |
|--|--|
| components | contexts/ layouts/ parts/ reducer/ views/ |
| config| constants.js : contante de l'API utilisée |
| hooks| définition du hook useInput |
| images| illustrations de l'application |
| scss| définition du style du projet |

### Précision concernant le dossier components
| Nom du dossier | Définition   |
|--|--|
| contexts | contient le userContext : state global de l'utilisateur connecté |
| layouts| définition des composants de style : squelettes dashboard, authentification et page protégée |
| parts| composants réutilisables d'essai |
| reducer| définition du useReducer de l'utilisateur |
| views| définition des différentes pages de l'application|




## Librairies utilisées

 - React router dom V6 : pour les routes de l'application
 - reactstrap / react-bootstrap : pour l'utilisation de composants bootstrap
 - react-custom-roulette-skate : génération de la roulette sur la page tirage au sort
 - axios : équivalent à fetch, pour faire des requêtes auprès d'API

 
## Fonctionnement du rendu de l'application

Diagramme UML du fonctionnement des routes

```mermaid
graph LR
A[L'utilisateur accède à une route] --> B([react-router-dom])
B -- Route de type login -- --> D{Layout Authentification} --> E(Page de connexion)
B -- Route de type dashboard -- --> F{Layout Dashboard} --> G{Layout ProtectedRoute : vérification de la connexon}
G --> H(Page concernée du dashboard)
```
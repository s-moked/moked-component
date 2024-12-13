# Moked Component Library

Une bibliothèque de composants React développée avec **Vite**, **Storybook**, et intégrant **Material UI**,
**TailwindCSS**, et diverses autres dépendances pour construire nos interfaces utilisateur modulaires.

---

## **Installation**

1. Clonez le dépôt :

```bash 
  git clone <url-du-repo>
```

2. Installez les dépendances :

```bash 
  npm install
```

## Développement

Voici les commandes principales disponibles dans le projet:

Pour lancer le mode developpement avec le fast refresh :

```bash
    npm run dev
```

### Construire l'application.

```bash
  npm run build
```

### Technologies

#### Frameworks & Bibliothèques

- React : Base pour créer les composants.
- Material UI : Design system
- TailwindCSS : Utilisé pour des styles utilitaires rapide.
- Vite : Bundler rapide pour le développement et la production.

#### Dépendances clés

- @mui/material, @mui/icons-material : Composants Material UI.
- React Router DOM : Gestion des routes.
- React PDF : Affichage de documents PDF.
- Lodash, clsx : Utilitaires JavaScript.

### Documentation Storybook

Storybook permet de documenter, de tester et de visualiser vos composants en isolation.

Rédaction d’une Story

1. Créez un fichier nomDuComposant.stories.js dans le même dossier que le composant.
2. Importez le composant:

```js
import React from 'react';
import MonComposant from './MonComposant';
```

3. Définissez la configuration de la story :

```js
export default {
    title: 'NomDeLaCatégorie/MonComposant',
    component: MonComposant,
};
```

4. Ajoutez une ou plusieurs variations :

```js
export const Exemple = () => <MonComposant prop1="valeur"/>;
export const AvecAutresProps = () => <MonComposant prop1="autreValeur"/>;
```

```bash
  npm run storybook
```

#### Générez un build statique de Storybook dans le répertoire storybook-static :

```bash
  npm run build-storybook
```

##### Visualisation du build Storybook :

```bash
  npx http-server -p 3003 storybook-static
```

Licence

Projet privé. Tous droits réservés à Ascalium.

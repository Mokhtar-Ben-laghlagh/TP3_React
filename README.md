
# TP3 React

Un TP React multi-pages avec navigation, lecteur audio, gestion de tâches et système de connexion.

## Aperçu

![Aperçu de l'application](./src/Logo.png)

## Fonctionnalités

- **Navigation** entre les pages Accueil et À propos via React Router
- **Système de connexion** avec état connecté/déconnecté
- **Lecteur audio** intégré
- **Liste de tâches** interactive
- **Logo** affiché sur la page d'accueil

## Structure du projet

```
src/
├── App.js            # Composant principal avec routing
├── App.css           # Styles globaux
├── index.js          # Point d'entrée React
├── Logo.png          # Logo de l'application
├── Accueil.js        # Page d'accueil
├── Apropos.js        # Page À propos
├── Connexion.js      # Composant de connexion
├── LecteurAudio.js   # Composant lecteur audio
└── ListeTaches.js    # Composant liste de tâches
```

## Installation

```bash
# Cloner le projet
git clone <url-du-repo>

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm start
```

L'application sera disponible sur [http://localhost:3000](http://localhost:3000)

## Technologies utilisées

- [React 18](https://react.dev/) — Bibliothèque UI
- [React Router DOM](https://reactrouter.com/) — Navigation entre pages
- [Create React App](https://create-react-app.dev/) — Configuration du projet



## Pages

### Accueil (`/`)
- Affiche le logo
- Lecteur audio
- Liste de tâches

### À propos (`/apropos`)
- Informations sur l'application

## Notes importantes

- Utiliser `import logo from './Logo.png'` puis `<img src={logo} alt="logo" />` pour afficher les images
- Tous les composants doivent avoir un `export default`
- Les noms de composants React commencent par une **majuscule**

https://github.com/user-attachments/assets/de548aeb-6d65-4160-b1ee-9307e04117e0


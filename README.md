# Application de gestion des utilisateurs

Cette application permet de gérer une liste d'utilisateurs, avec des fonctionnalités de création, affichage et suppression des utilisateurs. Elle permet également la validation de l'email et du mot de passe lors de l'inscription.

## Fonctionnalités

- **Inscription d'un utilisateur** : Permet d'ajouter un utilisateur avec son prénom, nom, téléphone, email, et mot de passe après validation des champs.
- **Affichage des utilisateurs** : Affiche la liste des utilisateurs dans un tableau, avec leurs informations (ID, prénom, nom, email, téléphone, mot de passe).
- **Suppression d'un utilisateur** : Permet de supprimer un utilisateur de la base de données.

## Structure des fichiers

- `index.html` : Le fichier principal contenant le formulaire d'inscription et l'affichage des utilisateurs.
- `styles.css` : Fichier de styles pour la mise en forme de l'application.
- `scripts.js` : Contient les scripts JavaScript pour gérer l'interaction avec l'API, l'affichage des utilisateurs, et l'ajout/suppression d'utilisateurs.

## Prérequis

- Un serveur local avec une API REST fonctionnelle pour gérer les utilisateurs (par exemple, un serveur utilisant JSON Server ou un backend personnalisé).
- Le serveur API doit être en écoute sur `http://localhost:3000/users`.

## Installation

1. Clonez ce repository sur votre machine locale.
2. Ouvrez le fichier `index.html` dans un navigateur.

### Exemple de structure de l'API

L'API devrait être configurée pour accepter les requêtes suivantes :

- **GET `/users`** : Récupère la liste des utilisateurs.
- **POST `/users`** : Ajoute un nouvel utilisateur à la base de données.
- **DELETE `/users/{id}`** : Supprime un utilisateur avec l'ID spécifié.

## Fonctionnement

### Formulaire d'inscription

1. Remplissez les champs obligatoires du formulaire (Prénom, Nom, Téléphone, Email, Mot de passe).
2. Assurez-vous que les emails et les mots de passe correspondent.
3. Un mot de passe valide doit contenir au moins 8 caractères, une majuscule, un chiffre, et un caractère spécial.
4. Une fois le formulaire soumis, les données seront envoyées au serveur pour ajouter l'utilisateur.

### Liste des utilisateurs

- Les utilisateurs enregistrés sont affichés dans un tableau avec leur ID, prénom, nom, email, téléphone, et mot de passe.
- Un bouton "Supprimer" est disponible à côté de chaque utilisateur pour supprimer cet utilisateur de la base de données.

## Technologies utilisées

- **HTML5** : Structure de la page.
- **CSS3** : Styles et mise en page.
- **JavaScript (ES6+)** : Interaction avec l'API, validation du formulaire, gestion des utilisateurs.
- **API REST** : Communique avec une API pour gérer les utilisateurs (ex : JSON Server).

## Aide et support

Pour toute question ou problème, veuillez ouvrir une issue sur ce repository.

## Contribuer

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez ce repository.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/your-feature`).
3. Effectuez vos modifications et validez (`git commit -am 'Add new feature'`).
4. Poussez votre branche (`git push origin feature/your-feature`).
5. Ouvrez une pull request pour fusionner vos modifications.

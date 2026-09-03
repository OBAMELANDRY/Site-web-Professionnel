# Déployer sur Firebase Hosting (gratuit, domaine *.web.app)

1. Installer les outils : `npm install -g firebase-tools`
2. Se connecter : `firebase login`
3. Depuis ce dossier : `firebase init hosting`
   - Choisir "Use an existing project" ou en créer un
   - Dossier public : `dist` (déjà configuré dans firebase.json)
   - Configurer comme single-page app : **Oui**
4. Construire le site : `npm install` puis `npm run build`
5. Déployer : `firebase deploy`

Le site sera en ligne sur `https://<votre-projet>.web.app`.

## Modifier le contenu
- Textes et projets : `src/components/*.jsx`
- Couleurs et styles : `src/App.css` et `src/index.css`
- Photos/logo : `src/assets/`
- Formulaire de contact : géré par formsubmit.co vers assoumoulandry1@gmail.com (aucune clé requise, activation au premier envoi)

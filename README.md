# Application Cinéma — React Hooks et React Router

Exercice réalisé pendant la formation GoMyCode : une petite application de films construite avec les hooks React et un routage côté client.

## Ce que fait le projet

- Affiche une liste de films sous forme de cartes (affiche, titre, description, note).
- Filtre les films par titre et par note minimale.
- Permet d'ajouter un film via un formulaire (titre, description, URL de l'affiche, note). Les films sont gardés en mémoire avec `useState` : ils disparaissent au rechargement de la page.
- Un clic sur une carte ouvre la page `/movie/:title`, qui affiche la description, la bande-annonce YouTube intégrée et un lien de retour à l'accueil.

## Notions travaillées

- `useState` et remontée de l'état vers le composant parent
- Communication entre composants par les props (`Filter`, `MovieList`, `MovieCard`, `MovieDescription`)
- Méthodes de tableau `filter()` et `map()`
- React Router : `BrowserRouter`, `Routes`, `Route`, `useParams`, `useNavigate`, `Link`

## Stack

- React 19
- React Router 7 (`react-router-dom`)
- Create React App (`react-scripts` 5)

## Lancer le projet

```bash
npm install
npm start
```

L'application s'ouvre sur http://localhost:3000.

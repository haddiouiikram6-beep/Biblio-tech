# Biblio-tech
# 📚 BiblioTech API

Une API REST développée avec **Node.js**, **Express.js** et **PostgreSQL** pour gérer une bibliothèque.

## Technologies utilisées

- Node.js
- Express.js
- PostgreSQL
- Docker
- Postman

## Installation

### 1. Cloner le projet

```bash
git clone <url-du-projet>
cd bibliotech
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer PostgreSQL avec Docker

```bash
docker run --name biblio-tech \
-p 5432:5432 \
-e POSTGRES_USER=ikram \
-e POSTGRES_PASSWORD=1234 \
-e POSTGRES_DB=test \
-d postgres:18-alpine
```

### 4. Créer la table

```sql
CREATE TABLE IF NOT EXISTS livres (
    id SERIAL PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    auteur VARCHAR(255) NOT NULL,
    categorie VARCHAR(100),
    annee INT,
    disponible BOOLEAN DEFAULT TRUE
);
```

### 5. Démarrer le serveur

```bash
node server.js
```

Le serveur sera disponible sur :

```
http://localhost:3000
```

---

# Configuration PostgreSQL

```javascript
const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "ikram",
    password: "1234",
    database: "test",
});
```

---

# Endpoints

## Accueil

### GET /

Réponse :

```json
{
  "message": "Bienvenue dans l'API BiblioTech"
}
```

---

## Ajouter un livre

### POST /livres

Body (JSON)

```json
{
  "titre": "Node.js",
  "auteur": "Ikram",
  "categorie": "Informatique",
  "annee": 2025,
  "disponible": true
}
```

---

## Afficher tous les livres

### GET /livres

Réponse :

```json
[
  {
    "id": 1,
    "titre": "Node.js",
    "auteur": "Ikram",
    "categorie": "Informatique",
    "annee": 2025,
    "disponible": true
  }
]
```

---

## Afficher un livre par ID

### GET /livres/:id

Exemple :

```
GET /livres/1
```

---

## Modifier un livre

### PUT /livres/:id

Exemple :

```
PUT /livres/1
```

Body :

```json
{
  "titre": "Express.js",
  "auteur": "Ikram",
  "categorie": "Backend",
  "annee": 2026,
  "disponible": true
}
```

---

## Supprimer un livre

### DELETE /livres/:id

Exemple :

```
DELETE /livres/1
```

---

# Tester l'API

L'API peut être testée avec **Postman**.

Exemples :

- GET `http://localhost:3000/livres`
- POST `http://localhost:3000/livres`
- PUT `http://localhost:3000/livres/1`
- DELETE `http://localhost:3000/livres/1`

---

# Auteur

**Ikram Haddioui**
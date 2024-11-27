const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors"); // Importer le middleware CORS

// Activer CORS pour toutes les requêtes
app.use(cors());

app.get("/", (req, res) => {
  res.send("Le serveur marche, mais il y a rien à voir ici");
});

app.get("/taches", (req, res) => {
  const taches = [
    { id: 1, texte: "truc a faire", fait: false },
    { id: 2, texte: "autre truc a faire", fait: true },
  ];

  res.send(taches);
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});

const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors"); // Importer le middleware CORS

const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todolist_dfs2_24_25",
});

connection.connect();

// Activer CORS pour toutes les requêtes
app.use(cors());

app.get("/", (req, res) => {
  res.send("Le serveur marche, mais il y a rien à voir ici");
});

app.get("/taches", (req, res) => {
  connection.query("SELECT * FROM tache");

  res.send(taches);
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});

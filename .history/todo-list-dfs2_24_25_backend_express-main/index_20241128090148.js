const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors"); // Importer le middleware CORS

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

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
  connection.query("SELECT * FROM tache ", (erreur, lignes, champs) => {
    if (erreur) throw erreur;

    res.send(lignes);
  });
});

app.post("/tache", (req, res) => {
  connection.query(
    "INSERT INTO tache(texte, fini) VALUES (?, 0)",
    [req.body.texte],
    (erreur, lignes, champs) => {
      if (erreur) throw erreur;

      res.status(201).send({ message: "tache enregistrée" });
    }
  );
});

//ajouter une méthode pour supprimer une tache
app.delete("/tache/:id", (req, res) => {
  const idTache = req.params.id;

  connection.query(
    "DELETE FROM tache WHERE id = ?",
    [idTache],
    (erreur, lignes, champs) => {
      if (erreur) throw erreur;

      res.status(200).send({ message: "tache supprimée" });
    }
  );
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});

const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors"); // Importer le middleware CORS
const jwtUtils = require("jsonwebtoken"); // gestion des jwt

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
  const token = req.headers["authorization"];

  jwtUtils.verify(token, "azerty", (erreur, donnees) => {
    if (erreur) return res.sendStatus(403);

    const pseudo = donnees.sub;

    console.log(pseudo);

    connection.query("SELECT * FROM tache ", (erreur, lignes, champs) => {
      if (erreur) throw erreur;

      res.send(lignes);
    });
  });
});

app.post("/tache", (req, res) => {
  connection.query(
    "INSERT INTO tache(texte, fini, date_creation) VALUES (?, 0, NOW())",
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

app.patch("/tache/change-status/:id", (req, res) => {
  const fini = req.body.fini;
  const idTache = req.params.id;

  connection.query(
    "UPDATE tache SET fini = ? WHERE id = ?",
    [fini ? "1" : "0", idTache],
    (erreur, lignes, champs) => {
      if (erreur) throw erreur;

      res.status(200).send({ message: "tache modifiée" });
    }
  );
});

app.post("/connexion", (req, res) => {
  connection.query(
    "SELECT * FROM utilisateur WHERE pseudo = ? AND mot_de_passe = ?",
    [req.body.pseudo, req.body.motDePasse],
    (erreur, lignes, champs) => {
      if (erreur) throw erreur;

      //si l'utilisateur existe
      if (lignes.length > 0) {
        //créer le JWT
        const jwt = jwtUtils.sign({ sub: req.body.pseudo }, "azerty");

        //retourner le jwt
        res.send({ jwt });
      } else {
        res.status(403).send({ message: "Identifiants invalides" });
      }
    }
  );
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});

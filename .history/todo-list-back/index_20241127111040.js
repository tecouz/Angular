const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

connection.connect();

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

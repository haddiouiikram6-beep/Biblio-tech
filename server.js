const express = require("express");
const { Pool } = require("pg");
const app = express();
app.use(express.json());
const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "ikram",
    password: "1234",
    database: "test",
});
pool.connect()
    .then(() => {
        console.log(" ✅connected to PostgreSQL");

    })
    .catch((err) => {
        console.error(" ❌ connection error:", err)
    });
app.get("/", (req, res) => {
    res.json({
        message: "Bienvenue dans l'API BiblioTech ",
    });
});
app.get("/livres", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM livres");
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({
            message: " Erreur serveur",
            error: error.message
        });
    }
});
console.log("GET /livres route loaded");
app.post("/livres", async (req, res) => {
    try {
        const { titre, auteur, categorie, annee, disponible } = req.body;

        const result = await pool.query(
            `INSERT INTO livres (titre, auteur, categorie, annee, disponible)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING *`,
            [titre, auteur, categorie, annee, disponible]
        );

        res.status(201).json({
            message: "Livre ajouté avec succès",
            livre: result.rows[0]
        });

    } catch (error) {
        res.status(500).json({
            message: "Erreur serveur",
            error: error.message
        });
    }
});
app.put("/livres",async(req,res)=>{
    
})
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
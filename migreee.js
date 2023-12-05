
const fs = require('fs');
const csv = require('csv-parser');
const sqlite3 = require('sqlite3').verbose();

// Chemin du fichier CSV
const csvFilePath = '/Users/ethanledouble/github/SneakR_/data_file.csv';

// Chemin de la base de données SQLite
const dbFilePath = '/Users/ethanledouble/github/SneakR_/my-project/.tmp/data.db';

// Création de la base de données
const db = new sqlite3.Database(dbFilePath);

// Vérification si la table "sneakers" existe déjà
db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='sneakers'", (err, row) => {
    if (err) {
        console.error(err.message);
        return;
    }

    if (row) {
        console.log("La table 'sneakers' existe déjà.");
        importData();
    } else {
        console.log("La table 'sneakers' n'existe pas. Création de la table...");

        // Création de la table "sneakers"
        db.run(`CREATE TABLE sneakers (
            id INTEGER PRIMARY KEY,
            brand TEXT,
            colorway TEXT,
            gender TEXT,
            image TEXT,
            links TEXT,
            name TEXT,
            release_date TEXT,
            silhouette TEXT,
            sku TEXT,
            story TEXT,
            uid TEXT,
            estimated_market_value REAL,
            retail_price REAL,
            created_at TEXT,
            updated_at TEXT
        )`, (err) => {
            if (err) {
                console.error(err.message);
                return;
            }

            console.log("La table 'sneakers' a été créée avec succès.");
            importData();
        });
    }
});

// Fonction pour importer les données du fichier CSV
function importData() {
    // Lecture du fichier CSV
    fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (row) => {
            // Insertion des données dans la table "sneakers"
            db.run(`INSERT INTO sneakers (id, brand, colorway, gender, image, links, name, release_date, silhouette, sku, story, uid, estimated_market_value, retail_price, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [row.id, row.brand, row.colorway, row.gender, row.image, row.links, row.name, row.release_date, row.silhouette, row.sku, row.story, row.uid, row.estimated_market_value, row.retail_price, row.created_at, row.updated_at]);
        })
        .on('end', () => {
            console.log('Les données ont été importées avec succès dans la table "sneakers".');
            // Fermeture de la base de données
            db.close();
        });
}

import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Database configuration
const db = mysql.createConnection({
  host: "localhost",
  user: "root",   // Enter your Username here
  password: "", //Enter your Password here
  database: "bookstore", //Enter Database name here 
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database!");
  }
});

// Routes
app.get("/api/books", (req, res) => {
  db.query("SELECT * FROM books", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.post("/api/books", (req, res) => {
  const { title, author } = req.body;
  db.query(
    "INSERT INTO books (title, author) VALUES (?, ?)",
    [title, author],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id: result.insertId, title, author });
    }
  );
});

app.put("/api/books/:id", (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  db.query(
    "UPDATE books SET title = ?, author = ? WHERE id = ?",
    [title, author, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ id, title, author });
    }
  );
});

app.delete("/api/books/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM books WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Book deleted" });
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

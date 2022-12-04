import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "wicho",
  password: "Osu!W1ch0",
  database: "tienda_libros"
}) 

//If there's an auth problem
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Osu!W1ch0';
//flush privileges;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hello this is the backend");
})

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if(err) return res.json(err);
    return res.json(data);
  });
})

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`, `description`, `cover`, `price`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.description,
    req.body.cover,
    req.body.price
  ];

  db.query(q, [values], (err, data) => {
    if(err) return res.json(err);
    return res.json("Book has been created succesfully!");
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id
  const q = "DELETE FROM books WHERE id = ?"

  db.query(q, [bookId], (err, data) => {
    if(err) return res.json(err);
    return res.json("Book has been deleted succesfully!");
  });
})

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id
  const q = "UPDATE books SET `title` = ?, `description` = ?, `cover` = ?, `price` = ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.description,
    req.body.cover,
    req.body.price,
  ];

  db.query(q, [...values, bookId], (err, data) => {
    if(err) return res.json(err);
    return res.json("Book has been updated succesfully!");
  });
})

app.listen(8800, () => {
  console.log("Connected to backend!");
});
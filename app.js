const express = require("express");
const pool = require("./database");
const cors = require("cors");
const app = express();
// register the ejs view engine
app.set("view engine", "ejs");
//without this middleware, we cannot use data submitted by forms
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static("Public"));
app.listen(3000, () => {
  console.log("Server is listening to port 3000");
});
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/posts", async (req, res) => {
  try {
    console.log("get posts request has arrived");
    const posts = await pool.query("SELECT * FROM nodetable");
    res.render("posts", { posts: posts.rows });
  } catch (err) {
    console.error(err.message);
  }
});
app.get("/singlepost/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(req.params.id);
    console.log("get a single post request has arrived");
    const posts = await pool.query("SELECT * FROM nodetable WHERE id = $1", [
      id,
    ]);
    res.render("singlepost", { posts: posts.rows[0] });
  } catch (err) {
    console.error(err.message);
  }
});
app.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("get a post request has arrived");
    const Apost = await pool.query("SELECT * FROM nodetable WHERE id = $1", [
      id,
    ]);
    res.json(Apost.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
app.delete("/posts/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const post = req.body;
    console.log("delete a post request has arrived");
    const deletepost = await pool.query("DELETE FROM nodetable WHERE id = $1", [
      id,
    ]);
    res.redirect("posts");
  } catch (err) {
    console.error(err.message);
  }
});
app.post("/posts", async (req, res) => {
  try {
    const post = req.body;
    console.log(post);
    const newpost = await pool.query(
      "INSERT INTO nodetable(title, body, urllink) values ($1, $2, $3) RETURNING*",
      [post.title, post.body, post.urllink]
    );
    res.redirect("posts");
  } catch (err) {
    console.error(err.message);
  }
});
app.post("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("update request has arrived");
    const updatepost = await pool.query(
    "UPDATE nodetable SET likes = $2 WHERE id = $1", [id, 1]
    );
    res.redirect("posts");
    console.log("update request handled");
    } catch (err) {
    console.error(err.message);
    }
});
app.get("/create", (req, res) => {
  res.render("create");
});
app.get("/style.css", (req, res) => {
  res.sendFile('./style.css', { root: __dirname });
});
app.use((req, res) => {
  res.status(404).render("404");
});

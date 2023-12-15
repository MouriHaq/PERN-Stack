// const express = require("express");
// const app = express();
// const cors = require("cors");
// const pool = require("./db");

// //middleware
// app.use(cors());
// app.use(express.json()); //req.body

// //ROUTES//

// //create a todo

// app.post("/todos", async (req, res) => {
//   try {
//     const { description } = req.body;
//     const newTodo = await pool.query(
//       "INSERT INTO todo (description) VALUES($1) RETURNING *",
//       [description]
//     );

//     res.json(newTodo.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// //get all todos

// app.get("/todos", async (req, res) => {
//   try {
//     const allTodos = await pool.query("SELECT * FROM todo");
//     res.json(allTodos.rows);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// //get a todo

// app.get("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
//       id
//     ]);

//     res.json(todo.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// //update a todo

// app.put("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { description } = req.body;
//     const updateTodo = await pool.query(
//       "UPDATE todo SET description = $1 WHERE todo_id = $2",
//       [description, id]
//     );

//     res.json("Todo was updated!");
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// //delete a todo

// app.delete("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
//       id
//     ]);
//     res.json("Todo was deleted!");
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// app.listen(5000, () => {
//   console.log("server has started on port 5000");
// });


const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // req.body

// Routes

// Create a link
app.post("/links", async (req, res) => {
  try {
    const { name, url } = req.body; // Update URL to lowercase 'url'
    const newLink = await pool.query(
      "INSERT INTO links (name, url) VALUES($1, $2) RETURNING *",
      [name, url]
    );

    res.json(newLink.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
});

// Get all links
app.get("/links", async (req, res) => {
  try {
    const allLinks = await pool.query("SELECT * FROM links");
    res.json(allLinks.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
});

// Get a link
app.get("/links/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const link = await pool.query("SELECT * FROM links WHERE todo_id = $1", [id]);

    res.json(link.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
});

// Update a link
app.put("/links/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, url } = req.body; // Update URL to lowercase 'url'
    const updateLink = await pool.query(
      "UPDATE links SET name = $1, url = $2 WHERE todo_id = $3",
      [name, url, id]
    );

    res.json({ message: "Link was updated!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
});

// Delete a link
app.delete("/links/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteLink = await pool.query("DELETE FROM links WHERE todo_id = $1", [id]);
    res.json({ message: "Link was deleted!" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      <input name="name" placeholder="Name"/>
      <input name="email" placeholder="Email"/>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/submit", async (req, res) => {
  try {
    const response = await fetch("http://flask-service:5000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Backend error" });
  }
});

app.listen(3000, () => console.log("Frontend running on port 3000"));

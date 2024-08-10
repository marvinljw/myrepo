const express = require("express");
const { engine } = require("express-handlebars");

const app = express();
const PORT = 3000;

// Configure Handlebars
app.engine(
  "handlebars",
  engine({
    defaultLayout: "index",
    layoutsDir: "./views/",
  })
);
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(express.static("public"));

// Define texts
const texts = [
  "Logic will get you from A to B. Imagination will take you everywhere.",
  "There are 10 kinds of people. Those who know binary and those who don't.",
  "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.",
  "It's not that I'm so smart, it's just that I stay with problems longer.",
  "It is pitch dark. You are likely to be eaten by a grue.",
];

app.get("/", (req, res) => {
  const randomText = texts[Math.floor(Math.random() * texts.length)];
  res.status(200).render("index", { text: randomText });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

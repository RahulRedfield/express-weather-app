const express = require("express");
const path = require("path");
const hbs = require("hbs")
const app = express();
const PORT = 8000;

const staticPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

hbs.registerPartials(partialsPath)

app.set("view engine", "hbs")
app.use(express.static(staticPath));
app.set("views", viewsPath)

app.get("", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("*", (req, res) => {
    res.render("404err", {
        errmsg: "Opps something went wrong!"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
});

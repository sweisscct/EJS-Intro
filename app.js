const express = require("express");

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended: true }));
app.set("view-engine", "ejs");

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/sign-up", (req, res) => {
    res.render("sign-up.ejs");
})

app.post("/sign-up", (req, res) => {
    let username = req.body.username;
    console.log(username);
    res.render("welcome.ejs", { username });
})

app.listen(PORT, () => {
    console.log(`${new Date()}: Listening at port ${PORT}`);
});
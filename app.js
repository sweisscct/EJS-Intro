const express = require("express");

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended: true }));

app.get("/", (req, res) => {
    res.sendFile("C:\\Users\\celeb\\Fullstack\\EJS-Intro\\index.html")
});

app.get("/sign-up", (req, res) => {
    res.sendFile("C:\\Users\\celeb\\Fullstack\\EJS-Intro\\sign-up.html");
})

app.post("/sign-up", (req, res) => {
    let username = req.body.username;
    console.log(username);
    res.send(username);
})

app.listen(PORT, () => {
    console.log(`${new Date()}: Listening at port ${PORT}`);
});
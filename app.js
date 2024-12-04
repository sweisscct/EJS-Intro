const express = require("express");

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended: true }));
app.set("view-engine", "ejs");

users = [];
let currentUser;

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/sign-up", (req, res) => {
    res.render("sign-up.ejs");
})

app.post("/sign-up", (req, res) => {
    let username = req.body.username;
    console.log(username);
    users.push({
        username: req.body.username,
        email: req.body.email,
        // Keeping password in plain text is VERY bad (sometimes illegal) practice
        password: req.body.password
    });
    res.redirect("login");
})

app.get("/login", (req, res) => {
    res.render("login.ejs", { loginError: "" });
})

app.post("/login", (req, res) => {
    users.forEach(user => {
        if (user.username == req.body.username) {
            console.log(user);
            if (user.password == req.body.password) {
                currentUser = user;
                res.redirect("welcome");
            } else res.render("login.ejs", {loginError: "Incorrect Password"});
        }
    });
    res.render("login.ejs", { loginError: "Username not found" });
})

app.get("/welcome", (req, res) => {
    console.log(`Welcome page current user is: ${currentUser} with the username: ${currentUser.username}`)
    // { variableInEJS: variableInServer}
    res.render("welcome.ejs", { username: currentUser.username} );
})

app.listen(PORT, () => {
    console.log(`${new Date()}: Listening at port ${PORT}`);
});
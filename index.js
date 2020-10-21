const express = require("express");
const cookieParser = require("cookie-parser");
const csurf = require("csurf");
const csurfProtection = csurf({ cookie: true });

const app = express();
const port = process.env.PORT || 3000;
app.use(cookieParser());

app.set("view engine", "pug");

const users = [
    {
        id: 1,
        firstName: "Jill",
        lastName: "Jack",
        email: "jill.jack@gmail.com",
    },
];
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/", (req, res) => {
    res.render("index", { users });
});

app.get("/create", csurfProtection, (req, res) => {
    res.render("create", { csrfToken: req.csrfToken() });
});




module.exports = app;

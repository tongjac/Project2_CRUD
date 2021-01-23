//Dependencies
const db = require("../models")

//routes
module.exports = (app) => {
    app.get("/api/articles", (req, res) => {
        db.articles.findAll({}).then((dbArticles) => res.send(dbArticles))
    });

    app.get("/api/comments", (req, res) => {
        db.comments.findAll({}).then((dbComs) => res.send(dbComs))
    });

    app.get("/api/users", (req, res) => {
        db.users.findAll({}).then((dbUsers) => res.send(dbUsers))
    });

    app.post("/api/comments", (req, res) => {
        console.log(req.body)
        db.comments.create({
            comment: req.body.comment
        }).then((dbComs) => res.send(dbComs));
    })

    



}



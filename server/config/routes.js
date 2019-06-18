var Cakes = require("../controllers/cakes")

module.exports = (app) => {
    app.get("/cakes", (req, res) => {
        Cakes.index(req, res);
    });

    app.post("/cakes", (req, res) => {
        Cakes.create(req, res);
    });

    app.post("/cakes/comment/:id", (req, res) =>{
        console.log("this is routes", req)
        Cakes.comment(req, res);
    });

    app.put("/cakes", (req, res) => {
        Cakes.update(req, res);
    });

    app.delete("/cakes/:id", (req,res) =>{
        Cakes.remove(req, res);
    });
}

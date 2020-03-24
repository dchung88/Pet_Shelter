const Pets = require("../controllers/Pets.controller");
const Users = require("../controllers/Users.controller");
const { authenticate } = require("../config/jwt");

module.exports = app => {

    app.post("/api/register", Users.register);
    app.post("/api/login", Users.login);

    app.get("/api/pets", Pets.getAll);
    app.get("/api/pets/:_id", Pets.getOne);
    app.post("/api/pets", Pets.create);
    app.put("/api/pets/edit/:_id", Pets.update);
    app.delete("/api/pets/:_id", Pets.delete);

}
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = 8008;
const db_name = "petsDB";
const app = express();

app.use( cors({credentials: true, origin: 'http://localhost:3000'}) );
app.use( express.json() );
app.use(cookieParser());

require("./config/mongoose")(db_name);
require("./routes/Pets.routes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
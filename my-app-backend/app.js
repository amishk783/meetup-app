const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const sequelize = require("./util/database");

const SequelizeStore = require("express-session-sequelize")(session.Store);



const sessionStore = new SequelizeStore({
  db: sequelize,
  
})
require('dotenv').config();

const authRouter = require("./routes/auth");
const meetupController = require("./Controllers/meetup");
const verifyJWT = require('./middleware/verifyJWT')
const User = require("./Modals/User");
const Meetup = require("./Modals/Meetup");


const app = express();

app.use(bodyParser.json());

app.use(cors());
app.use(session({ secret: "secret-key", resave: false, saveUninitialized: false ,store:sessionStore}));




app.use("/users", authRouter);


app.use("/add-meetup",verifyJWT, meetupController.postMeetup);

app.use((req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

Meetup.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Meetup);

sequelize
  .sync({force:true})
  .then((result) => {
    // console.log(result);
    const server = http.createServer(app);

    server.listen(3003);
  })
  .catch((err) => {
    console.log(err);
  });
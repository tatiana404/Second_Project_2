const mysql = require("mysql2")

const path = require("path")
const express = require("express")

const session = require("express-session")
const exphbs = require("express-handlebars")
const hbs = exphbs.create({})

const routes = require("./controllers")
const sequelize = require("./config/connection")
const SequelizeStore = require("connect-session-sequelize")(session.Store)
//const helpers = require('./utils/helpers');

//const Post = require("/models/Post")

const app = express()
const PORT = process.env.PORT || 3001

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
}

app.use(session(sess))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")))

app.use(routes)
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")

sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () =>
    console.log("Server listening on: http://localhost:" + PORT)
  )
})

// const db = mysql.createConnection(
//   {
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "inventory_db",
//   },
//   console.log(`Connected to the inventory_db database.`)
// )
//
// db.connect(function (err) {
//   if (err) {
//     throw err
//   }
// })
//
// module.exports = db

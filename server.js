const mysql = require("mysql2")

const path = require('path');
const express = require('express');

const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

pp.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "inventory_db",
  },
  console.log(`Connected to the inventory_db database.`)
)

db.connect(function (err) {
  if (err) {
    throw err
  }
})

module.exports = db

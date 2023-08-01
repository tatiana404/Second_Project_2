const mysql = require("mysql2")

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

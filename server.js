const express = require("express");
require("dotenv").config()
require("./db/conn")
const cors = require("cors")
const app = express();
const path = require("path")
const jwt = require("jsonwebtoken")
const empCollection = require("./model/model")

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.render("index")
})
app.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body
      const user = await empCollection.findOne({ email })
      if (user) {
        if (password) {
          const token = jwt.sign({ email: email }, "superScretthing")
          res.status(200).json({ token: token })
        } else {
          res.json("Wrong pass")
        }
      } else {
        res.status(404).json("User not found")
      }
    } catch (e) {
      console.log(e)
      res.status(500).send("Something broke")
    }
  })
app.listen(3000);

const mongoose = require("mongoose")
const empSchema = new mongoose.Schema(
  {
    displayName: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)


const empCollection = new mongoose.model("empcollection", empSchema)
module.exports = empCollection

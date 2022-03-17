const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
  url: {
    type: String,
    required: true,
    unique: true
  },
  garbled: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('URL', urlSchema)

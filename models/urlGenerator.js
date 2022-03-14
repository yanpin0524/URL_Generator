const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlGeneratorSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  random: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('urlGenerator', urlGeneratorSchema)

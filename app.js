const express = require('express')
const expressHandlebars = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

const routes = require('./routes')
require('./config/mongoose')

const app = express()
const port = 3000

app.engine('hbs', expressHandlebars({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(routes)

app.listen(port, () => {
  console.log(`伺服器已連線 : localhost:${port} `)
})
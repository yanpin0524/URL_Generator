const express = require('express')
const router = express.Router()
const generateGarbled = require('./generateGarbled')
const URL = require('../../models/url')

router.get('/', (req, res) => {
  res.render('index', {})
})

router.post('/', (req, res) => {
  let garbled = generateGarbled()

  // 重複亂碼過濾
  URL.findOne({ garbled: garbled }).lean().lean((item) => {
    if (!item) { return }

    while (garbled === item) {
      garbled = generateGarbled()
    }
  })

  const content = {
    garbled: garbled,
    url: req.body.url
  }

  URL.findOne({ url: content.url })
    .lean()
    .then((item) => {
      if (item) {
        console.log(item)
        return res.render('index', { content: item })

      } else {
        return URL.create(content)
          .then(() => res.render('index', { content }))
          .catch((error) => console.log(error))

      }
    })
})

module.exports = router

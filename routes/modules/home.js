const express = require('express')
const router = express.Router()
const generateGarbled = require('./generateGarbled')
const URL = require('../../models/url')

router.get('/', (req, res) => {
  res.render('index', {})
})

router.post('/', (req, res) => {
  let garbled = generateGarbled()

  // 過濾掉重複的亂碼
  URL.findOne({ garbled: garbled })
    .lean()
    .then((item) => {
      if (!item) { return garbled }

      while (garbled === item.garbled) {
        garbled = generateGarbled()
      }
      return garbled
    })
    .then((garbled) => {
      const content = {
        garbled: garbled,
        url: req.body.url
      }
      return content
    })
    .then((content) => {
      URL.findOne({ url: content.url })
        .lean()
        .then((item) => {
          // 輸入相同網址時，回傳一樣的縮址。
          if (item) {
            return res.render('index', { content: item })

          } else {
            return URL.create(content)
              .then(() => res.render('index', { content }))
              .catch((error) => console.log(error))
          }
        })
    })
    .catch((error) => console.log(error))
})

module.exports = router

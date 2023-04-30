// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 載入 Restaurant model
const restaurants = require('./modules/restaurant')
// 引入 home 模組程式碼
const home = require('./modules/home')
const users = require('./modules/users')

// 將網址結構符合 /restaurants 字串開頭的 request 導向 restaurants 模組
router.use('/restaurants', restaurants)
router.use('/users', users)
// 將網址結構符合 / 字串的 request 導向 home 模組
router.use('/', home)
// 匯出路由器
module.exports = router

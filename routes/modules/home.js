// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 載入 Restaurant model
const Restaurant = require('../../models/restaurant')

// 定義首頁路由
router.get('/', (req, res) => {
  Restaurant.find({})
    .lean()
    .then(restaurantsData => {
      res.render('index', { restaurantsData })
    })
    .catch(err => console.log(err))
})

// 定義搜尋路由
router.get('/search', (req, res) => {
  const keywords = req.query.keyword
  const keyword = req.query.keyword.trim().toLowerCase()
  const sort = req.query.sort
  const sortObject = {}

  // 排序功能
  if (sort) {
    const sortArray = sort.split('-')
    const key = sortArray[0]
    const value = sortArray[1]
    sortObject[key] = value
    // 當無輸入資料或輸入空格時導至主畫面
  } else if (!keywords || keywords.trim() === '') {
    return res.redirect('/')
  }

  Restaurant.find({})
    .lean()
    .sort(sortObject)
    .then(restaurantsData => {
      const filterRestaurantsData = restaurantsData.filter(
        data =>
          data.name.toLowerCase().includes(keyword) ||
          data.category.includes(keyword)
      )
      res.render('index', {
        restaurantsData: filterRestaurantsData,
        keywords,
        sort
      })
    })
    .catch(err => console.log(err))
})
// 匯出路由器
module.exports = router

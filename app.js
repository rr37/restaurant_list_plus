// require packages used in the project
const express = require('express')
// require mongoose
const mongoose = require('mongoose')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

const port = 3000



const exphbs = require('express-handlebars')
const restaurantList = require('./models/seeds/restaurant.json')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// routes setting
app.get('/',(req, res) =>{
  res.render('index', {restaurants: restaurantList.results})
})

app.get('/search', (req, res) => {
  const results = restaurantList.results
  const keyword = req.query.keyword

  //當無輸入資料或輸入空格時導至主畫面
  if (!keyword || keyword.trim()==="") {
    return res.redirect("/")
  }

  const searchRestaurant = results.filter( result => 
    result.name.toLowerCase().includes(keyword.toLowerCase()) ||
    result.category.includes(keyword)
  )
  res.render('index', { restaurants: searchRestaurant,keyword: keyword })
})

app.get('/restaurants/:id', (req, res) => {
  const results = restaurantList.results
  const restaurant = results.find(result => 
    result.id.toString() === req.params.id
  )
    res.render('show', { restaurant: restaurant })
})

// listen on server
app.listen(port, (req, res) => {
  console.log(`Express is listening on localhost: ${port}`)
})

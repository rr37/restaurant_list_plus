const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Restaurant = require('../restaurant')
const User = require('../user')
const restaurantList = require('./restaurant.json').results
const db = require('../../config/mongoose')

const SEED_USER = [
  {
    name: 'user1',
    email: 'user1@example.com',
    password: '12345678',
    owned_restaurant_id: [1, 2, 3]
  },
  {
    name: 'user2',
    email: 'user2@example.com',
    password: '12345678',
    owned_restaurant_id: [4, 5, 6]
  }
]

db.once('open', async () => {
  console.log('running restaurantSeeder script...');
  try {
    for (const seed_user of SEED_USER) {
      // 建立用戶前，以 email 先查找該用戶是否已存在
      const existingUser = await User.findOne({ email: seed_user.email });
      if (existingUser) {
        console.log(`User with email ${seed_user.email} already exists`);
        continue;
      }
      const passwordHash = await bcrypt.hash(seed_user.password, 10);
      const user = await User.create({
        name: seed_user.name,
        email: seed_user.email,
        password: passwordHash,
      });
      const userId = user._id;
      // 新增該用戶擁有的餐廳
      const restaurantPromises = restaurantList
        // 先把該用戶有的餐廳資料抓出來
        .filter(restaurant => seed_user.owned_restaurant_id.includes(restaurant.id))
        // 再將這些餐廳連同用戶id回傳至資料庫
        .map(restaurant => Restaurant.create({ ...restaurant, userId }));

      await Promise.all(restaurantPromises);

    }
    console.log('done.');
    process.exit();
  } catch (err) {
    console.error(err);
  }
});


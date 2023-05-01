# restaurant_list_plus

![Screenshot of Restaurant List](./public/image/snapshot1.png)

## 簡介

一個餐廳清單小專案，使用者登入後可以在頁面中進行餐廳資訊的搜尋、瀏覽、新增、修改、排序、刪除。

## 功能

- 查看所有餐廳
- 瀏覽餐廳的詳細資訊
- 可透過連結至該餐廳的 Google 地圖
- 搜尋特定餐廳
- 新增餐廳
- 編輯餐廳
- 刪除餐廳
- 排序餐廳
- 註冊帳號
- 用 facebook 帳號登入

## 開發環境與套件

### 主環境：
* VS Code - 編程環境
* node.js / express.js@4.16.4- 後端框架
* MongoDB - 資料庫
* mongoose@5.9.7 - MongoDB ODM

### 外觀：
* express-handlebars@3.0.0 - 樣板引擎
* handlebars-helpers@0.10.0 - 樣版引擎條件外掛
* bootstrap@5.2.3 - 樣式
* fontawesome@5.8.1 (CDN) - icon

### 登入功能：
* bcryptjs@2.4.3 - 密碼雜湊外掛
* passport@0.4.1 - 登入功能外掛
* passport-facebook@3.0.0 - 本地登入功能外掛
* passport-local@1.0.0" - facebook登入功能外掛
* connect-flash@0.1.1 - session 驗證資料暫存外掛
* express-session@1.17.1 - session 驗證外掛

### 其餘 Middleware：
* body-parser@1.20.2 - 解析資料外掛
* method-override@3.0.0 - 能以 http 動詞重構路由的外掛

## 安裝與執行

1.確認已安裝 node.js 、 npm

  - node.js 可透過nvm進行安裝,而 npm 會在安裝 node.js 自動下載。
  - nvm 安裝方式[傳送門](https://github.com/creationix/nvm)
  - node.js 安裝方式:
  ```bash
  $ nvm install 14.16.0
  ```

2.開啟Terminal, 將此專案 Clone 到本地

  ```bash
  $ git clone https://github.com/rr37/restaurant_list_plus.git
  ```

3.進入此專案資料夾

  ```bash
  $ cd restaurant_list_plus
  ```

4.安裝 npm 套件

  ```bash
  $ npm install
  ```

5.參考 `.env.example`檔案，重構 `.env` 環境

6.安裝種子資料

  ```bash
  $ npm run seed
  ```

7.安裝完畢接續輸入

  ```bash
  $ npm run start
  ```

8.當Terminal顯示以下訊息，代表伺服器已成功運行

  ```
  Express is listening on localhost: 3000
  ```

9.若欲暫停使用

  ```
  ctrl + c
  ```

10.打開瀏覽器至以下網址操作看看吧

  ```
  http://localhost:3000
  ```

## 作者

* **rr37** 

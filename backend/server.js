const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path')
const server = require('http').createServer(app);

// const App = require('../client/index.js')



const bodyParser = require('body-parser');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const oAuthRoute = require('./routes/oAuthRoute');
const productRoute = require('./routes/productRoute');
const bannerRoute = require('./routes/bannerRoute');
const reviewRoute = require('./routes/reviewRoute')
const favoriteRoute = require('./routes/favoriteRoute')
const shopRoute =  require('./routes/shopRoute')
const myRoute = require('./routes/myRoute')
const chatRoute = require('./routes/chatRoute')
const orderRoute = require('./routes/orderRoute')
const searchRoute = require('./routes/searchRoute')

const connectDB = require('./tools/db');

// Basic requirements and setup
require('dotenv').config();
connectDB();


// server-side

// app.get('/', (req, res) => {
//   const app = ReactDOMServer.renderToString(<App />);

//   const indexFile = path.resolve('./client/build/index.html');
//   fs.readFile(indexFile, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Something went wrong:', err);
//       return res.status(500).send('Oops, better luck next time!');
//     }

//     return res.send(
//       data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
//     );
//   });
// });


// Route
app.use('/*', bodyParser.json());

app.use('/v1/products', productRoute);
app.use('/v1/auth', authRoute);
app.use('/v1/users', userRoute);
app.use('/v1/banners', bannerRoute)
app.use('/v1/reviews', reviewRoute)
app.use('/v1/favorite', favoriteRoute)
app.use('/v1/shops',shopRoute)
app.use('/v1/my', myRoute)
app.use('/v1/chat', chatRoute)
app.use('/v1/orders', orderRoute)
app.use('/v1/search', searchRoute)



if(process.env.NODE_ENV === 'production'){ // if the application is running on heroku, we then execute the following function
  app.use(express.static(path.join(__dirname, '/client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname ,'client','build','index.html'));
  });
}  //static is a middleware that allows us to serve a static file, which when we run 'npm run build', it will generate a file called build


server.listen(port, () => {
  console.log(`Server running on port  http://localhost:${port}`);
});

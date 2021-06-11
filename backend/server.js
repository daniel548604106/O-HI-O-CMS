const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const path = require("path");
const server = require("http").createServer(app);
const cors = require("cors");

// const App = require('../client/index.js')

const bodyParser = require("body-parser");
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const shopRoute = require("./routes/shopRoute");
const accountRoute = require("./routes/accountRoute");
const bannerRoute = require('./routes/bannerRoute')
const connectDB = require("./utils/db");
const dotenv = require('dotenv')
// Basic requirements and setup
dotenv.config();
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
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors());

app.use("/v1/api/products", productRoute);
app.use('/v1/api/account',accountRoute)
app.use("/v1/api/users", userRoute);
app.use("/v1/api/shops", shopRoute);
app.use("/v1/api/login", authRoute);
app.use('/v1/api/banners',bannerRoute)




if (process.env.NODE_ENV === "production") {
  // if the application is running on heroku, we then execute the following function
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} //static is a middleware that allows us to serve a static file, which when we run 'npm run build', it will generate a file called build

server.listen(port, () => {
  console.log(`Server running on port  http://localhost:${port}`);
});

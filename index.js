const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
var passport = require("passport");
var authenticate = require("./authenticate");
require("dotenv").config();

// Loading routers
const productRouter = require('./routes/api/productRouter');
const userRouter = require('./routes/api/userRouter');
const bidRouter = require('./routes/api/bidRouter');
var favoriteRouter = require('./routes/api/favoriteRouter');
const shop = require('./routes/api/shop');
const canteen = require('./routes/api/canteen')
const ask = require('./routes/api/ask');

(DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024 * 10), (DEFAULT_PARAMETER_LIMIT = 10000);

const bodyParserJsonConfig = () => ({
  parameterLimit: DEFAULT_PARAMETER_LIMIT,
  limit: DEFAULT_BODY_SIZE_LIMIT
});

const app = express();

app.use(bodyParser.json(bodyParserJsonConfig()));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

// Bodyparser Middleware
app.use(bodyParser.json());

// DB config
const mongoURI = require("./config/keys").mongoURI;

// Connect to mongo
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch(err => console.log(err));

app.use(passport.initialize());

// Use routes
app.use('/api/products',productRouter);
app.use('/api/users',userRouter);
app.use('/api/bids',bidRouter);
app.use('/api/favorites',favoriteRouter);
app.use('/api/',ask);
app.use('/api/shop',shop);
app.use('/api/canteen',canteen);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started running on port ${port}`));

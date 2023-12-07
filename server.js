const express = require("express");
const session = require("express-session");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;
const handlebarsHelpers = require('./utils/helper'); 
const Handlebars = require('handlebars');
const helpers = {
  'eq': handlebarsHelpers.eq,
  'lt': handlebarsHelpers.lt,
  'gt': handlebarsHelpers.gt,
  'dif': handlebarsHelpers.dif,
  'critLow': handlebarsHelpers.critLow,
  'critHigh': handlebarsHelpers.critHigh,
  'withInRange': handlebarsHelpers.withInRange,
};
const sess = {
  secret: process.env.SECRET,
  cookie: {
    maxAge: 3000000
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

Object.entries(helpers).forEach(([name, func]) => {
  Handlebars.registerHelper(name, func);
});
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine('handlebars', exphbs({ helpers: handlebarsHelpers }));
app.set("view engine", "handlebars");
app.use(
  session({
    secret: process.env.SECRET,
    store: new SequelizeStore({ db: sequelize }),
    resave: false,
    saveUninitialized: false,
  })
);
app.use(routes);

const init = async () => {
  try {
    await sequelize.sync({ force: false });
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
  } catch (error) {
    console.error("ERROR syncing database:", error);
  }
};

init();
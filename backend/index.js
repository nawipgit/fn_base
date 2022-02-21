const Koa = require('../node_modules/koa');
const Serve = require('../node_modules/koa-static');
const Router = require('../node_modules/koa-router');
const Logger = require('../node_modules/koa-logger');
const Session = require('../node_modules/koa-session');
const Cors = require("../node_modules/koa2-cors");
const BodyParser = require('../node_modules/koa-bodyparser');
const Json = require('../node_modules/koa-json');
const Sequelize = require('../node_modules/sequelize');
const app = new Koa();
const router = new Router();
const config = require('../config');

app.use(Logger());
app.use(Cors(config.cors));
app.use(Session(config.session, app));
app.use(BodyParser(config.bodyparser));
app.use(Json(config.json));
app.use(Serve(config.static));
app.use(router.routes());
app.use(router.allowedMethods());

// require('./models')(config, config.db(Sequelize), Sequelize);
// require('./controllers.js')(config, router);

app.listen(config.port);
console.log(`Backend start on ${config.ip()}:${config.port}`);
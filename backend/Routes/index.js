const authRoute = require('./auth.routes');
const UserRoute = require('./user.routes');
const salesRoute = require('./sales.routes');
const menusRoute = require('./menu.routes');
const itemRoute = require('./item.routes');
const app = require('../app');

//! always remove  before pushing to server
function appRouter() {
    app.use('/v1/auth', authRoute);
    //\\ ==============================|| START: UI MASTERS ROUTES ||============================== //\\
    app.use('/v1/users', UserRoute);
    app.use('/v1/items', itemRoute);
    app.use('/v1/sales', salesRoute);
    app.use('/v1/menu', menusRoute);
    //\\ ==============================|| END: UI MASTERS ROUTES ||============================== //\\
}

module.exports = appRouter;

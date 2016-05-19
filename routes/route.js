exports.setRoutes = function(app) {
  app.use('/user-login', require('./routers/user-login.js'));
  app.use('/user-register', require('./routers/user-register.js'));
}

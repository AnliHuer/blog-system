exports.setRoutes = function(app) {
  app.use('/user-login', require('./routers/user-login.js'));
  app.use('/user-register', require('./routers/user-register.js'));
  app.use('/user-index', require('./routers/user-index.js'));
  app.use('/user-about', require('./routers/user-about.js'))
}

exports.setRoutes = function(app) {
  app.use('/', require('./routers/index.js'));
  app.use('/users', require('./routers/users.js'));
}
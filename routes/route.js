exports.setRoutes = function(app) {
  app.use('/user-login', require('./routers/user-login.js'));
  app.use('/user-register', require('./routers/user-register.js'));
  app.use('/user-index', require('./routers/user-index.js'));
  app.use('/user-about', require('./routers/user-about.js'));
  app.use('/user-blog', require('./routers/user-blog.js'));
  app.use('/user-blog-detail', require('./routers/user-blog-detail.js'));
  app.use('/user-tag', require('./routers/user-tag.js'));
  app.use('/user-word', require('./routers/user-word.js'));
  app.use('/user-new-blog', require('./routers/user-new-blog.js'));
  app.use('/ueditor/ue',require('./routers/ueditor-ue.js'))
}

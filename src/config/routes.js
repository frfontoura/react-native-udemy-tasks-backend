module.exports = app => {
  app.post("/signup", app.src.api.user.save);
};

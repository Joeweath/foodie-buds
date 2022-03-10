function passUserToView(req, res, next) {
  res.locals.user = req.user ? req.user : null;
  next();
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

function passUrlToView(req, res, next) {
  res.locals.url = req.originalUrl;
  next();
  console.log("test url", req.originalUrl);
}

export { passUserToView, isLoggedIn, passUrlToView };

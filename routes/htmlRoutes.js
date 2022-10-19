var path = require("path");
const { auth, requiresAuth } = require('express-openid-connect');
require('dotenv').config();
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  idpLogout: true,
};

module.exports = function(app) {
  // auth router attaches /login, /logout, and /callback routes to the baseURL
  app.use(auth(config));

  // req.isAuthenticated is provided from the auth router
  app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });
  
  app.get("/images/:id", requiresAuth(), function(req, res) {
    res.sendFile(path.join(__dirname, "../public/detail.html"));
  });

  app.get("/favorites", requiresAuth(), function(req, res) {
    res.sendFile(path.join(__dirname, "../public/favorites.html"));
  });

  app.get("/home", requiresAuth(), function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("*", requiresAuth(), function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};
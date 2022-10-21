var express = require("express");
var mongoose = require("mongoose");

var app = express();
var PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  if (req.originalUrl === ( `/routes/apiRoutes/api/stripe/*` )) {
    next(); // Do nothing with the body because I need it in a raw state.
  } else {
    express.json()(req, res, next);  // ONLY do express.json() if the received request is NOT a WebHook from Stripe.
  }
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/imageperformance",
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }
);

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});

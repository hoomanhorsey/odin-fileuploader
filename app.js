// Dependencies & core modules
const express = require("express");
const path = require("node:path");

// Authentication & session middleware
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// Express app initialization
const app = express();

// View engine / template setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// authentication middleware
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());

// body parsing middelware
app.use(express.urlencoded({ extended: false }));

// Route imports
const genRouter = require("./routes/genRouter");
const authRouter = require("./routes/authRouter");
const fileRouter = require("./routes/fileRouter");
const folderRouter = require("./routes/folderRouter");

// Route mounting
app.use("/auth", authRouter);
app.use("/file", fileRouter);
app.use("/folder", folderRouter);
app.use("/", genRouter);

// Server port / configuration
const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(
    `Express app to learn prisma, file uploader program - listening on port ${PORT}!`,
  );
});

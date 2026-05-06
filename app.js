// Dependencies & core modules
const express = require("express");
const path = require("node:path");

// Authentication & session middleware
const session = require("express-session");
const passport = require("passport");

// Prisma imports
const { PrismaSessionStore } = require("@quixo3/prisma-session-store");
const { prisma } = require("./lib/prisma.js");

require("./config/passport");

// Express app initialization
const app = express();

// prisma sessions
app.use(
  session({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // ms
    },
    secret: "a santa at nasa",
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000, //ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  }),
);

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
const driveRouter = require("./routes/driveRouter");

// Route mounting
app.use("/auth", authRouter);
app.use("/drive", driveRouter);

app.get("/", (req, res) => {
  if (req.user) {
    console.log("there is a user logged in");
    return res.render("dashboard", { user: req.user });
  }
  res.redirect("/auth/login");
});

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

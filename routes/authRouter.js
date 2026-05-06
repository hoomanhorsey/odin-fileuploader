// routes/router.js
const { Router } = require("express");

const passport = require("passport");

const authRouter = Router();
const authController = require("../controllers/authController");

// genRouter.get("/", (req, res) => res.send("All authors"));
// genRouter.get("/:authorId", (req, res) => {
//   const { authorId } = req.params;
//   res.send(`Author ID: ${authorId}`);
// });

authRouter.get("/login", authController.loginDisplay);
authRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
  }),
);
authRouter.get("/signup", authController.signupDisplay);

authRouter.post("/signup", authController.signupHandle);

module.exports = authRouter;

// routes/router.js
const { Router } = require("express");

const authRouter = Router();
const authController = require("../controllers/authController");

// genRouter.get("/", (req, res) => res.send("All authors"));
// genRouter.get("/:authorId", (req, res) => {
//   const { authorId } = req.params;
//   res.send(`Author ID: ${authorId}`);
// });

authRouter.get("/login", authController.loginDisplay);
authRouter.post("/login", authController.loginHandle);
authRouter.get("/signup", authController.signupDisplay);

authRouter.post("/signup", authController.signupHandle);

module.exports = authRouter;

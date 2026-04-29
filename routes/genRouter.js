// routes/router.js
const { Router } = require("express");

const genRouter = Router();
const { genFunction } = require("../controllers/genController");

// genRouter.get("/", (req, res) => res.send("All authors"));
// genRouter.get("/:authorId", (req, res) => {
//   const { authorId } = req.params;
//   res.send(`Author ID: ${authorId}`);
// });

genRouter.get("/", genFunction);

module.exports = genRouter;

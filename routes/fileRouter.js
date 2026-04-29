// routes/router.js
const { Router } = require("express");

const fileRouter = Router();
const { fileFunction } = require("../controllers/fileController");

// genRouter.get("/", (req, res) => res.send("All authors"));
// genRouter.get("/:authorId", (req, res) => {
//   const { authorId } = req.params;
//   res.send(`Author ID: ${authorId}`);
// });

fileRouter.get("/", fileFunction);
// insert different routes for upload file etc

module.exports = fileRouter;

// routes/router.js
const { Router } = require("express");

const folderRouter = Router();
const { folderFunction } = require("../controllers/folderController");

// genRouter.get("/", (req, res) => res.send("All authors"));
// genRouter.get("/:authorId", (req, res) => {
//   const { authorId } = req.params;
//   res.send(`Author ID: ${authorId}`);
// });

folderRouter.get("/", folderFunction);
// insert different routes for upload file etc

module.exports = folderRouter;

// routes/router.js
const { Router } = require("express");

const driveRouter = Router();
const driveController = require("../controllers/driveController");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

driveRouter.get("/folders", driveController.indexFolders);
driveRouter.get("/folders/:folderId", driveController.showFolder);
driveRouter.get("/files/:fileId", driveController.showFile);
driveRouter.get("/upload/", driveController.showUploadForm);
driveRouter.post("/upload", upload.single("avatar"), function (req, res, next) {
  res.redirect("/drive/upload");
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
});

// insert different routes for upload file etc

module.exports = driveRouter;

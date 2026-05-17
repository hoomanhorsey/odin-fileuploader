// routes/router.js
const { Router } = require("express");

const driveRouter = Router();
const driveController = require("../controllers/driveController");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

driveRouter.get("/", driveController.indexFolders);

driveRouter.get("/newFolder", driveController.showNewFolderForm);
driveRouter.post("/newFolder", driveController.handleNewFolder);

driveRouter.get("/folder/:folderId", driveController.showFolder);

driveRouter.post(
  "/folder/:folderId",
  upload.single("uploadedFile"),
  driveController.handleUpload,
  // function (req, res, next) {
  //   res.redirect("/drive/upload");
  //   // req.file is the `avatar` file
  //   // req.body will hold the text fields, if there were any
  // },
);

driveRouter.post(
  "/folder/:folderId/rename",
  driveController.handleFolderRename,
);

driveRouter.get("/folder/:folderId/file/:fileId", driveController.showFile);

driveRouter.post(
  "/folder/:folderId/file/:fileId",
  driveController.handleDeleteFile,
);

driveRouter.get("/files/:fileId", driveController.showFile);

// insert different routes for upload file etc

module.exports = driveRouter;

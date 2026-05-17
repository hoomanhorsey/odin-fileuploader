// controllers/authorController.js

const driveRepository = require("../repositories/driveRepository");

async function indexFolders(req, res) {
  try {
    //insert logic
    console.log("Now we should display folder index");

    const retrievedFolders = await driveRepository.getFolders(req.user.id);

    // console.log("TYPE:", typeof folders);
    // console.log("IS ARRAY:", Array.isArray(folders));
    // console.log("VALUE:", folders);
    // console.log("FINAL FOLDERS CHECK:", folders);
    // console.log("FINAL IS ARRAY:", Array.isArray(folders));
    res.render("drive", { user: req.user, folders: retrievedFolders });
  } catch (error) {
    console.log("somekind of error in genFunction");
    res
      .status(500)
      .send("Internal Server error or may need to customise error message");
  }
  //insert logic of function here
}

async function showNewFolderForm(req, res) {
  try {
    //insert logic
    console.log("Now we should display folder new folder form");
    res.render("newFolder");
  } catch (error) {
    console.log("somekind of error in newFolder function");
    res
      .status(500)
      .send("Internal Server error or may need to customise error message");
  }
  //insert logic of function here
}

async function handleNewFolder(req, res) {
  try {
    //insert logic
    console.log("Now we should post new folder");

    console.table(req.body);

    console.log("req.body.newFolderName " + req.body.newFolderName);
    console.table(req.user);

    await driveRepository.createFolder(req.body.newFolderName, req.user.id);
    res.redirect("/");
    // res.render("newFolder");
  } catch (error) {
    console.log("somekind of error in post newFolder function: " + error);
    res
      .status(500)
      .send("Internal Server error or may need to customise error message");
  }
  //insert logic of function here
}

async function showFolder(req, res) {
  try {
    //insert logic
    console.log("Now we should display onefolder " + req.params.folderId);

    const editing = !!req.query.editing; // true when ?editing=1

    const folder = await driveRepository.getFolder(
      parseInt(req.params.folderId),
    );

    console.table(folder);
    console.table(folder.files);
    res.render("folder", {
      folder: folder,
      editing: editing,
    });
  } catch (error) {
    console.log(error + " somekind of error in genFunction");
    res
      .status(500)
      .send("Internal Server error or may need to customise error message");
  }
  //insert logic of function here
}
async function showFile(req, res) {
  try {
    //insert logic
    console.log("Now we should display file  view");
    res.render("file", { fileId: req.params.fileId });
  } catch (error) {
    console.log("somekind of error in genFunction");
    res
      .status(500)
      .send("Internal Server error or may need to customise error message");
  }
  //insert logic of function here
}

async function handleUpload(req, res) {
  try {
    const folderId = req.params.folderId;

    console.log("posting upload, into folderId: " + folderId);
    console.table(req.file);

    const file = await driveRepository.createFile(
      req.file,
      req.user.id,
      parseInt(folderId),
    );
    // redirect back to folder page
    return res.redirect(`/drive/folder/${folderId}`);
  } catch (error) {
    console.log(error + ": error in file upload function");
    res
      .status(500)
      .send("Internal Server error or may need to customise error message");
  }
}

async function showUploadForm(req, res) {
  try {
    //insert logic
    console.log("Now we should display the upoload form");
    res.render("upload");
  } catch (error) {
    console.log("somekind of error in upload function");
    res
      .status(500)
      .send("Internal Server error or may need to customise error message");
  }
  //insert logic of function here
}

async function handleFolderRename(req, res) {
  try {
    const folderId = parseInt(req.params.folderId);
    const newFolderName = req.body.name; // This is the input value
    console.log(
      "calling respository function to rename folder - folderId: " +
        folderId +
        ", newFolderName :" +
        newFolderName,
    );
    await driveRepository.renameFolder(newFolderName, folderId);
    return res.redirect(`/drive/folder/${folderId}`);
  } catch (error) {
    console.log(error + " somekind of error in upload function");
    res
      .status(500)
      .send("Internal Server error or may need to customise error message");
  }
}

async function showFile(req, res) {
  try {
    const fileDetails = await driveRepository.showFile(
      parseInt(req.params.fileId),
    );
    return res.render("file", {
      fileDetails: fileDetails,
      folderId: req.params.folderId,
    });
  } catch (error) {
    console.log(error + "some kind of error in file show function");
    res;
    status(500).send(
      "Internal Server error or may need to customise error message",
    );
  }
}
async function handleDeleteFile(req, res) {
  try {
    await driveRepository.deleteFile(parseInt(req.params.fileId));
    return res.redirect(`/drive/folder/${req.params.folderId}`);
  } catch (error) {
    console.log(error + "some kind of error in file delete function");
    res;
    status(500).send(
      "Internal Server error or may need to customise error message",
    );
  }
}

module.exports = {
  showNewFolderForm,
  handleNewFolder,
  indexFolders,
  showFolder,
  showFile,
  showUploadForm,
  handleUpload,
  handleFolderRename,
  showFile,
  handleDeleteFile,
};

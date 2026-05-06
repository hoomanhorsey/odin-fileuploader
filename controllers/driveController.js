// controllers/authorController.js

// const db = require("../db");

// async function getAuthorById(req, res) {
//   const { authorId } = req.params;

//   const author = await db.getAuthorById(Number(authorId));

//   if (!author) {
//     res.status(404).send("Author not found");
//     return;
//   }

//   res.send(`Author Name: ${author.name}`);
// }
async function indexFolders(req, res) {
  try {
    //insert logic
    console.log("Now we should display folder index");
    res.render("folders");
  } catch (error) {
    console.log("somekind of error in genFunction");
    res
      .status(500)
      .send("Internal Server error or may need to customise error message");
  }
  //insert logic of function here
}

async function showFolder(req, res) {
  try {
    //insert logic
    console.log("Now we should display onefolder");
    res.render("file");
  } catch (error) {
    console.log("somekind of error in genFunction");
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
module.exports = { indexFolders, showFolder, showFile, showUploadForm };

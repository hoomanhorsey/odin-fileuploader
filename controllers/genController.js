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
async function genFunction(req, res) {
  try {
    //insert logic
    console.log("genController is working");
    console.log(req.user);
    res.render("index", { user: req.user });
  } catch (error) {
    console.log("somekind of error in genFunction");
    res
      .status(500)
      .send("Internal Server error or may need to customise error message");
  }
  //insert logic of function here
}

module.exports = { genFunction };

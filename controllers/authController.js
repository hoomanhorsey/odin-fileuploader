// controllers/authorController.js

const authRepository = require("../repositories/authRepository");

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
async function authFunction(req, res) {
  try {
    //insert logic
    console.log("Now we should display login view");
    res.render("login");
  } catch (error) {
    console.log("somekind of error in genFunction");
    res
      .status(500)
      .send("Internal Server error or may need to customise error message");
  }
  //insert logic of function here
}

async function loginDisplay(req, res) {
  try {
    //insert logic
    console.log("Now we should display login view");
    res.render("login");
  } catch (error) {
    console.log("somekind of error in genFunction");
    res
      .status(500)
      .send("Internal Server error or may need to customise error message");
  }
  //insert logic of function here
}
async function loginHandle(req, res) {
  try {
    //insert logic
    console.log("Now we should display login view");
    res.render("login");
  } catch (error) {
    console.log("somekind of error in genFunction");
    res
      .status(500)
      .send("Internal Server error or may need to customise error message");
  }
  //insert logic of function here
}

async function signupDisplay(req, res) {
  try {
    //insert logic
    console.log("Now we should display login view");
    res.render("signup");
  } catch (error) {
    console.log("somekind of error in genFunction");
    res
      .status(500)
      .send("Internal Server error or may need to customise error message");
  }
  //insert logic of function here
}
async function signupHandle(req, res) {
  try {
    //insert logic

    authRepository.createUser(req.body);
    console.log("Now we should display login view");
    res.render("signup");
  } catch (error) {
    console.log("somekind of error in genFunction");
    res
      .status(500)
      .send("Internal Server error or may need to customise error message");
  }
  //insert logic of function here
}

module.exports = { loginDisplay, loginHandle, signupDisplay, signupHandle };

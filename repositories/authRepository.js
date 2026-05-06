const { prisma } = require("../lib/prisma");

// const user = await prisma.user.create({
//   data: {
//     email: "elsa@prisma.io",
//     name: "Elsa Prisma",
//   },
// });

async function createUser(body) {
  console.log("createUser from authRepository is being called.");
  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      username: body.username,
      password: body.password,
    },
  });

  console.log("User created:", newUser);
  return newUser;
}

async function findUserByUsername(username) {
  console.log("findUserByUsername from authRepository is being called.");

  try {
    const user = await prisma.user.findUnique({
      where: { username: username },
    });
    console.log(user);
    return user ?? null;
  } catch (err) {
    console.log("error with prisma find user", err);
    return null;
  }
}

async function findUserById(id) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: id },
    });
    return user ?? null;
  } catch (err) {
    console.log("error with prisma find user");
    return null;
  }
}

module.exports = { createUser, findUserByUsername, findUserById };

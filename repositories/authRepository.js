const { prisma } = require("../lib/prisma");

// const user = await prisma.user.create({
//   data: {
//     email: "elsa@prisma.io",
//     name: "Elsa Prisma",
//   },
// });

async function createUser(body) {
  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
      passwordHash: body.password,
    },
  });

  console.log("User created:", newUser);
  return newUser;
}

module.exports = { createUser };

const authRepository = require("../repositories/authRepository");

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await authRepository.findUserByUsername(username);

      //   const { rows } = await pool.query(
      //     "SELECT * FROM users WHERE username = $1",
      //     [username],
      //   );
      //   const user = rows[0];

      if (!user) {
        console.log("wrong user name error");
        return done(null, false, { message: "Incorrect username" });
      }
      if (user.password !== password) {
        console.log(
          "wrong password error.  user.password " +
            user.password +
            " password " +
            password,
        );
        return done(null, false, { message: "Incorrect password" });
      }
      console.log(
        "This is a custom console.log in the Local Strategy to confirm that the authorisation was done",
      );

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }),
);
// passport.use(
//   new LocalStrategy(async (username, password, done) => {
//     try {
//       const { rows } = await pool.query(
//         "SELECT * FROM users WHERE username = $1",
//         [username],
//       );
//       const user = rows[0];

//       if (!user) {
//         return done(null, false, { message: "Incorrect username" });
//       }
//       if (user.password !== password) {
//         return done(null, false, { message: "Incorrect password" });
//       }
//       return done(null, user);
//     } catch (err) {
//       return done(err);
//     }
//   }),
// );

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await authRepository.findUserById(id);

    // const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [
    //   id,
    // ]);
    // const user = rows[0];

    done(null, user);
  } catch (err) {
    done(err);
  }
});

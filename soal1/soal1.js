const userDB = { username: "joko", password: "rahasia", role: "non-admin" };

function loginUser(inputUsername, inputPassword) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        inputUsername === userDB.username &&
        inputPassword === userDB.password
      ) {
        resolve(userDB);
      } else {
        reject("Username or Password wrong!");
      }
    }, 500);
  });
}

function getRole(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(user.role);
    }, 500);
  });
}

function getMenu(role) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(role);
    }, 500);
  });
}

function dashBoardAdmin(role) {
  console.log(`Dashboard Admin - Role Anda: ${role}`);
}

function dashboard(role) {
  console.log(`Role kamu: ${role}`);
}

loginUser("joko", "rahasia")
  .then((user) => getRole(user))
  .then((role) =>
    getMenu(role).then(() => {
      if (role === "admin") {
        dashBoardAdmin(role);
      } else {
        dashboard(role);
      }
    })
  )
  .catch((error) => console.log(error));

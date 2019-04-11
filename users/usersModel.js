const db = require("../data/dbConfig");

module.exports = {
  addUser,
  getUsers,
  removeUser
};

async function addUser(user) {
  const [id] = await db("users").insert(user);

  return db("users")
    .where({ id })
    .first();
}

function removeUser(id) {
  return db('users')
    .where('id', id)
    .del();
}

function getUsers() {
  return db("users");
}

const db = require("../data/config");

function find() {
  return db("resources");
}

async function create(id, changes) {
  await db("resources")
    .where({ id })
    .update(changes);

  return findById(id);
}

module.exports = {
  find,
  create
};

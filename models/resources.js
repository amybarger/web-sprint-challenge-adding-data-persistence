const db = require("../data/config");

function find() {
  return db("resources");
}

function create(resource) {
  return db("resources")
    .insert(resource, "id")
    .then(([id]) => getResourceById(id));
}
function getResourceById(id) {
  return db("resources")
    .where("resources.id", id)
    .first();
}

module.exports = {
  find,
  create,
  getResourceById
};

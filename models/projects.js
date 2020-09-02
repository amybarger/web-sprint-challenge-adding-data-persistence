const db = require("../data/config");

function find() {
  return db("project");
}

function create(project) {
  return db("project")
    .insert(project, "id")
    .then(([id]) => getProjectsById(id));
}
function getProjectsById(id) {
  return db("project")
    .where("project.id", id)
    .first();
}

module.exports = {
  find,
  create,
  getProjectsById
};

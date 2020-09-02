const db = require("../data/config");

function find() {
  return db("tasks as t")
    .leftJoin("project as p", "p.id", "t.project_id")
    .select("t.id", "t.task", "t.description", "p.name", "p.description");
}

function create(task) {
  return db("tasks")
    .insert(task, "id")
    .then(([id]) => getTasksById(id));
}
function getTasksById(id) {
  return db("tasks")
    .where("tasks.id", id)
    .first();
}
module.exports = {
  find,
  create,
  getTasksById
};

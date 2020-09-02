const db = require("../data/config");

function find() {
    return db("tasks as t")
    .leftJoin("project as p", "p.id", "t.project_id")
    .select("t.id", "t.task", "t.description", "p.name", "p.description")
}

function create(id, changes) {
    await db("tasks")
    .where({ id })
    .update(changes)

    return findById(id)
}

module.exports = {
    find,
    create
}
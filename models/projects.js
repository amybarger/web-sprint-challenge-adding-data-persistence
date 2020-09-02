const db = require("../data/config");

function find() {
    return db("project")
}

function create(id, changes) {
    await db("project")
    .where({ id })
    .update(changes)

    return findById(id)
}

module.exports = {
    find,
    create
}
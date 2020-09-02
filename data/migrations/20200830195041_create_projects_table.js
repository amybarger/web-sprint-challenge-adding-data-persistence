exports.up = async function(knex) {
  await knex.schema.createTable("project", table => {
    table.increments("id");
    table.text("name").notNull();
    table.text("description");
    table
      .boolean("project_complete")
      .notNull()
      .defaultTo("false");
  });

  await knex.schema.createTable("tasks", table => {
    table.increments("id");
    table.text("task").notNull();
    table.text("description").notNull();
    table.text("project_id").notNull();
  });

  await knex.schema.createTable("resources", table => {
    table.increments("id");
    table.text("description").notNull();
    table.text("notes");
    table
      .boolean("task_complete")
      .notNull()
      .defaultTo("false");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("project");
};

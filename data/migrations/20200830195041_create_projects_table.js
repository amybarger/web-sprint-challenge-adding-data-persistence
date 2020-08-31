exports.up = async function(knex) {
  await knex.schema.createTable("project", table => {
    table
      .increments("id")
      .notNull()
      .unique()
      .primary();
    table
      .text("project")
      .notNull()
      .unique();
    table.text("description");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("project");
};

exports.up = async function(knex) {
  await knex.schema.createTable("project", table => {
    table
      .increments("id")
      .notNull()
      .unique()
      .primary();
    table
      .text("name")
      .notNull()
      .unique();
    table.text("description");
    table
      .boolean("project_complete")
      .notNull()
      .defaultValue("false");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("project");
};

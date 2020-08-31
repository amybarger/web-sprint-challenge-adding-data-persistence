exports.seed = async function(knex) {
  await knex("projects").insert([
    {
      project: "Make a calendar"
    },
    {
      project: "Paint a whale"
    },
    {
      project: "Start a podcast"
    }
  ]);
};

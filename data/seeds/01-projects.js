exports.seed = async function(knex) {
  await knex("projects").insert([
    {
      id: 1,
      name: "Make a calendar",
      description: "Make this calendar so you can start planning wisely.",
      project_complete: false
    },
    {
      id: 2,
      name: "Paint a whale",
      description: "You need a creative hobby, start by painting a whale",
      project_complete: false
    },
    {
      id: 3,
      name: "Start a podcast",
      description: "Starting a podcast will help you meet people.",
      project_complete: false
    }
  ]);
};

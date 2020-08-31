exports.seed = async function(knex) {
  await knex("tasks").insert([
    {
      task: "Draw the number of days and months, binding them together",
      project_id: 1
    },
    {
      task: "Grab a blank canvas, have paint colors ready on pallette",
      project_id: 2
    },
    {
      task: "Buy the needed equipment and think about guests to join",
      project_id: 3
    }
  ]);
};

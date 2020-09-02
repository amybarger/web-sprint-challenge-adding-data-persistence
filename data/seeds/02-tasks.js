exports.seed = async function(knex) {
  await knex("tasks").insert([
    {
      id: 1,
      task: "Calendar assembly",
      description: "Draw the number of days and months, binding them together.",
      project_id: 1
    },
    {
      id: 2,
      task: "Calendar theme",
      description:
        "Decide what theme you want for the calendar: Dogs or cats in bikinis?",
      project_id: 1
    },
    {
      id: 2,
      task: "Painting assembly",
      description: "Grab a blank canvas, have paint colors ready on pallette.",
      project_id: 2
    },
    {
      id: 4,
      task: "Whale inspiration",
      description: "Google whales and find a whale that you want to draw.",
      project_id: 2
    },
    {
      id: 3,
      task: "Podcast prep",
      description: "Buy the needed equipment and think about guests to join.",
      project_id: 3
    },
    {
      id: 5,
      task: "Shop backdrops",
      description: "Find a few backdrops that look cool for the podcast.",
      project_id: 3
    }
  ]);
};

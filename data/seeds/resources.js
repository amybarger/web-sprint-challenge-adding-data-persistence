exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          id: 1,
          description: "marker",
          notes: "Get the Sharpie brand.",
          task_complete: "false"
        },
        {
          id: 2,
          description: "paper",
          notes: "Get a card stock type.",
          task_complete: "false"
        },
        {
          id: 3,
          description: "stapler",
          notes: "This will help bind things.",
          task_complete: "false"
        },
        {
          id: 4,
          description: "blank canvas",
          notes: "Make sure to get this at Art Supply, Co.",
          task_complete: "false"
        },
        {
          id: 5,
          description: "paint",
          notes: "Make sure to get this at Art Supply, Co.",
          task_complete: "false"
        },
        {
          id: 6,
          description: "pallette",
          notes: "Make sure to get this at Art Supply, Co.",
          task_complete: "false"
        },
        {
          id: 7,
          description: "headphones",
          notes: "Check out headphones at Best Buy",
          task_complete: "false"
        },
        {
          id: 8,
          description: "microphone",
          notes: "Go to Music Co. to find best mic.",
          task_complete: "false"
        },
        {
          id: 9,
          description: "address book",
          notes:
            "Keep track of contacts to help get to know people and for the podcast.",
          task_complete: "false"
        }
      ]);
    });
};

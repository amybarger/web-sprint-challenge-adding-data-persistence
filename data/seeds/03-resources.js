exports.seed = async function(knex) {
  await knex("resources").insert([
    {
      resource: "marker"
    },
    {
      resource: "paper"
    },
    {
      resource: "stapler"
    },
    {
      resource: "blank canvas"
    },
    {
      resource: "paint"
    },
    {
      resource: "pallette"
    },
    {
      resource: "headphones"
    },
    {
      resource: "microphone"
    },
    {
      resource: "address book"
    }
  ]);
};

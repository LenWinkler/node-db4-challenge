
exports.seed = function(knex) {
  return knex('recipes').insert([
    {recipe_name: 'cookies'},
    {recipe_name: 'cake'},
    {recipe_name: 'bread'}
  ]);
};

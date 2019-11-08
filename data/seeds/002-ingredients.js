
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {ingredient: 'egg', quantity: 2 , recipe_id: 1 },
    {ingredient: 'stick of butter', quantity: 1, recipe_id: 1 },
    {ingredient: 'cups of flour', quantity: 2, recipe_id: 1 },
    {ingredient: 'stick of butter', quantity: 1, recipe_id: 2 },
    {ingredient: 'cup of milk', quantity: 1 , recipe_id: 2 },
    {ingredient: 'cups of flour', quantity: 1.5 , recipe_id: 2 },
    {ingredient: 'tsp of yeast', quantity: 2, recipe_id: 3 },
    {ingredient: 'cups of flour', quantity: 1.5 , recipe_id: 3 },
    {ingredient: 'cups of water', quantity: 1 , recipe_id: 3 },
  ]);
};

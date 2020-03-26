
exports.seed = function(knex) {
  return knex('steps').insert([
    {step_number: 1, instructions: 'mix ingredients', recipe_id: 1 },
    {step_number: 2, instructions: 'bake at 400 degrees for 20 minutes', recipe_id: 1 },
    {step_number: 1, instructions: 'mix ingredients', recipe_id: 2 },
    {step_number: 2, instructions: 'bake at 350 degrees for 30 minutes', recipe_id: 2 },
    {step_number: 1, instructions: 'mix ingredients and let bread rise', recipe_id: 3 },
    {step_number: 2, instructions: 'bake at 400 for 35 minutes', recipe_id: 3 }
  ]);
};

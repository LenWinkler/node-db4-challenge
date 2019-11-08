const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
};

function getShoppingList(recipe_id) {
    return db('ingredients')
    .where('recipe_id', recipe_id)
};

function getInstructions(recipe_id) {
    return db.select('step_number', 'instructions')
            .from('steps')
            .where('recipe_id', recipe_id)
            .orderBy('step_number')
}


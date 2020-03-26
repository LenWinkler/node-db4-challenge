
exports.up = function(knex) {
  return knex.schema 
  .createTable('recipes', tbl => {
      tbl.increments();

      tbl.string('recipe_name', 255).notNullable();
  })

  .createTable('ingredients', tbl => {
      tbl.increments();

      tbl.string('ingredient', 255).notNullable();
      tbl.float('quantity');
      tbl
      .integer('recipe_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  })

  .createTable('steps', tbl => {
      tbl.increments();

      tbl.integer('step_number').notNullable();
      tbl.string('instructions', 255).notNullable();
      tbl
      .integer('recipe_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};

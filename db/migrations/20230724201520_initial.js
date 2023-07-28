/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema 
    .createTable('quotes', function (table) {
      table.increments('id').primary();
      table.string('quote');
      table.string('type');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema 
    .dropTable('quotes')
};


exports.up = function(knex) {
  return knex.schema.createTable('CAD_USER', function(table) {
    table.increments('codintuser').primary();
    table.string('name');
    table.string('email');
    table.string('password');
    table.timestamp('create_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('CAD_USER')
};

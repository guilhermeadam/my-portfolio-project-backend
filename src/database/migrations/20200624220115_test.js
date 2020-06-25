
exports.up = function(knex) {
  return knex.schema.createTable('test', function(table) {
      table.string('teste');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('test')
};

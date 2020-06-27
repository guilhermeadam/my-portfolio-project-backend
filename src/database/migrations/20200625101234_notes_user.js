exports.up = function (knex) {
  return knex.schema.createTable("NOTES_USER", function (table) {
    table.string('codintuser');
    table.increments('codintnote').primary();
    table.string("subject");
    table.string("description");
    table.timestamp("create_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
    return knex.schema.dropTable('NOTES_USER')
};

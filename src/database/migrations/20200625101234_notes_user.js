exports.up = function (knex) {
  return knex.schema.createTable("NOTES_USER", function (table) {
    table.string('CODINTUSER');
    table.increments('CODINTNOTE').primary();
    table.string("SUBJECT");
    table.string("DESCRIPTION");
    table.timestamp("CREATEDAT").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
    return knex.schema.dropTable('NOTES_USER')
};

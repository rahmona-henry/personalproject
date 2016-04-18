exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('beer', function(table) {
   table.increments()
   table.string('name')
   table.string('style')
   table.integer('inventory')
  })
};


exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('beer')
};

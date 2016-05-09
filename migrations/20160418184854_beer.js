exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('beer', function(table) {
   table.increments('id')
   table.string('name')
   table.string('style')
   table.integer('inventory')
   table.integer('userId')
  })
};


exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('beer')
};

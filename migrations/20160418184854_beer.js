exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('beer', function(table) {
   table.increments('id')
   table.string('name')
   table.string('style')
   table.integer('inventory')
   table.string('brewDate')
   table.string('bottlingDate')
   table.string('ingredients')
   table.string('process')
   table.string('tasting')
  })
};


exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('beer')
};

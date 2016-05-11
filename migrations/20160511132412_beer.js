exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('beer', function(table) {
   table.increments('id')
   table.string('name')
   table.string('style')
   table.string('brewer')
   table.integer('yield')
   table.string('brewDate')
   table.string('bottlingDate')
   table.integer('original')
   table.integer('final')
   table.integer('mash')
   table.integer('ferment')
   table.integer('abv')
   table.integer('ibu')
   table.string('ingredients')
   table.string('brewing')
   table.string('fermentation')
   table.string('tasting')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('beer')
};

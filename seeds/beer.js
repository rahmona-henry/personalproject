
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('beer').del(),

    // Inserts seed entries
    knex('beer').insert({name:'Cara', style: 'American Pale Ale', inventory:48}),
    knex('beer').insert({name: 'Zeus', style: 'Pilsner', inventory:46}),
    knex('beer').insert({name: 'Sheebie', style: 'Pale Ale', inventory:72})
  );
};

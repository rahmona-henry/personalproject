
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('beer').del(),

    // Inserts seed entries
    knex('beer').insert({name:'Grogans', style: 'stout', inventory:23},
    knex('beer').insert({name: 'Seans', style: 'stout', inventory:46}),
    knex('beer').insert({name: 'Gerties', style: 'stout', inventory:72})
  );
};

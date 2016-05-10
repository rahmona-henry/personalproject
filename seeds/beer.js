
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('beer').del(),

    // Inserts seed entries
    knex('beer').insert({name:'Cara', style: 'American Pale Ale', inventory:48, brewDate:'23 Jan 2016', bottlingDate:'23 Feb 2016', ingredients: 'bhhhghfhffgfgfgfgfg', process: 'ghfgdhfhdfghdgfhdgf', tasting: 'dsfsfsfdfdfd'}),
    knex('beer').insert({name: 'Zeus', style: 'Pilsner', inventory:46, brewDate:'23 Jan 2016', bottlingDate:'23 Feb 2016', ingredients: 'bhhhghfhffgfgfgfgfg', process: 'ghfgdhfhdfghdgfhdgf', tasting: 'dsfsfsfdfdfd'}),
    knex('beer').insert({name: 'Sheebie', style: 'Pale Ale', inventory:72, brewDate: '23 Jan 2016', bottlingDate:'23 Feb 2016', ingredients: 'bhhhghfhffgfgfgfgfg', process: 'ghfgdhfhdfghdgfhdgf', tasting: 'dsfsfsfdfdfd'})
  );
};

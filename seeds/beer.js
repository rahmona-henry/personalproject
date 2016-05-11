
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('beer').del(),

    // Inserts seed entries
    knex('beer').insert({name:'Cara', style: 'American Pale Ale', brewer:'Rahmona Henry and James Griffiths', yield:48, brewDate:'11 Feb 2016', bottlingDate:'06 Mar 2016', original: 1111, final: 2222, mash: 3333, ferment: 4444, abv: 12, ibu: 45, ingredients: 'bhhhghfhffgfgfgfgfg', brewing: 'ghfgdhfhdfghdgfhdgf', fermentation: 'ddddddddddd', tasting: 'dsfsfsfdfdfd'}),
    knex('beer').insert({name:'Pragmatic Chaos', style: 'American Pale Ale', brewer:'Rahmona Henry and James Griffiths', yield:48, brewDate:'11 Feb 2016', bottlingDate:'06 Mar 2016', original: 1111, final: 2222, mash: 3333, ferment: 4444, abv: 12, ibu: 45, ingredients: 'bhhhghfhffgfgfgfgfg', brewing: 'ghfgdhfhdfghdgfhdgf', fermentation: 'ddddddddddd', tasting: 'dsfsfsfdfdfd'}),
    knex('beer').insert({name:'Command Line', style: 'American Pale Ale', brewer:'Rahmona Henry and James Griffiths', yield:48, brewDate:'11 Feb 2016', bottlingDate:'06 Mar 2016', original: 1111, final: 2222, mash: 3333, ferment: 4444, abv: 12, ibu: 45, ingredients: 'bhhhghfhffgfgfgfgfg', brewing: 'ghfgdhfhdfghdgfhdgf', fermentation: 'ddddddddddd', tasting: 'dsfsfsfdfdfd'})
  );
};

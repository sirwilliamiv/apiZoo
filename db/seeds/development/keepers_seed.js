//seeding for zookeepers

exports.seed = function(knex, Promise) {
  return knex('keepers').del()
  .then(function () {
    return Promise.all([
      knex('keepers').insert({
        name: 'Scott',
      }),
      knex('keepers').insert({
        name: 'Joe',
      }),
      knex('keepers').insert({
        name: 'Caitlin',
      }),
      knex('keepers').insert({
        name: 'Callan',
      }),
      knex('keepers').insert({
        name: 'Dom',
      }),
      knex('keepers').insert({
        name: 'Matt',
      }),
      knex('keepers').insert({
        name: 'Jack',
      }),
      knex('keepers').insert({
        name: 'John',
      }),
      knex('keepers').insert({
        name: 'Steve',
      }),
      knex('keepers').insert({
        name: 'Jessica',
      }),
      knex('keepers').insert({
        name: 'Brenda',
      }),
    ]);
  });
}

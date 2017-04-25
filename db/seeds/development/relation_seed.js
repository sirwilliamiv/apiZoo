
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('relation').del()
    .then(function () {
      return Promise.all ([
        knex('relation').insert({
          animals_id:1,
          keepers_id:1
        }),
        knex('relation').insert({
          animals_id:2,
          keepers_id:5
        }),
        knex('relation').insert({
          animals_id:3,
          keepers_id:6
        }),
        knex('relation').insert({
          animals_id:4,
          keepers_id:3
        }),
        knex('relation').insert({
          animals_id:5,
          keepers_id:3
        }),
        knex('relation').insert({
          animals_id:6,
          keepers_id:1
        }),
        knex('relation').insert({
          animals_id:7,
          keepers_id:5
        }),
        knex('relation').insert({
          animals_id:8,
          keepers_id:2
        }),
        knex('relation').insert({
          animals_id:9,
          keepers_id:4
        }),
        knex('relation').insert({
          animals_id:10,
          keepers_id:9
        }),
        knex('relation').insert({
          animals_id:11,
          keepers_id:2
        }),
        knex('relation').insert({
          animals_id:12,
          keepers_id:7
        }),
        knex('relation').insert({
          animals_id:13,
          keepers_id:9
        }),
        knex('relation').insert({
          animals_id:14,
          keepers_id:3
        }),
        knex('relation').insert({
          animals_id:15,
          keepers_id:2
        }),
        knex('relation').insert({
          animals_id:16,
          keepers_id:9
        }),
        knex('relation').insert({
          animals_id:17,
          keepers_id:5
        }),
        knex('relation').insert({
          animals_id:18,
          keepers_id:2
        })
      ]);
    });
};

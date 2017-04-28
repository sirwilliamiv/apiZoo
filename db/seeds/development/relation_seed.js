
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('relation').del()
    .then(function () {
      return Promise.all ([
        knex('relation').insert({
          animal_id:1,
          keeper_id:1
        }),
        knex('relation').insert({
          animal_id:2,
          keeper_id:5
        }),
        knex('relation').insert({
          animal_id:3,
          keeper_id:6
        }),
        knex('relation').insert({
          animal_id:4,
          keeper_id:3
        }),
        knex('relation').insert({
          animal_id:5,
          keeper_id:3
        }),
        knex('relation').insert({
          animal_id:6,
          keeper_id:1
        }),
        knex('relation').insert({
          animal_id:7,
          keeper_id:5
        }),
        knex('relation').insert({
          animal_id:8,
          keeper_id:2
        }),
        knex('relation').insert({
          animal_id:9,
          keeper_id:4
        }),
        knex('relation').insert({
          animal_id:10,
          keeper_id:9
        }),
        knex('relation').insert({
          animal_id:11,
          keeper_id:2
        }),
        knex('relation').insert({
          animal_id:12,
          keeper_id:7
        }),
        knex('relation').insert({
          animal_id:13,
          keeper_id:9
        }),
        knex('relation').insert({
          animal_id:14,
          keeper_id:3
        }),
        knex('relation').insert({
          animal_id:15,
          keeper_id:2
        }),
        knex('relation').insert({
          animal_id:16,
          keeper_id:9
        }),
        knex('relation').insert({
          animal_id:17,
          keeper_id:5
        }),
        knex('relation').insert({
          animal_id:18,
          keeper_id:2
        })
      ]);
    });
};

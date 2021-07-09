exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function(table) {
        table.string('id').primary();
        table.string('nome').notNullable();
        table.integer('idade').notNullable();
        table.string('email').notNullable();
        table.binary('foto').notNullable();
        table.string('escolaridade').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuarios');
};
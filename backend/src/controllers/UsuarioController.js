const connection = require('../database/connection');

const crypto = require('crypto');

module.exports = {

    async index(request, response) {
        const usuarios = await connection('usuarios').select('*');
    },

    async salvar(request, response) {
        const { nome, idade, email, foto, escolaridade } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('usuarios').insert({
            id,
            nome,
            idade,
            email,
            foto,
            escolaridade
        })
    }
}

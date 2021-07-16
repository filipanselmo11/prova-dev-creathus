const connection = require('../database/connection');

const crypto = require('crypto');

module.exports = {

    async index(request, response) {
        try {
            const usuarios = await connection('usuarios').select('*');
            return response.status(200).json(usuarios);
        } catch (erro) {
            return response.status(400).send(erro);
        }

    },

    async salvar(request, response) {
        try {
            const { nome, idade, email, foto, escolaridade } = request.body;

            const id = crypto.randomBytes(4).toString('HEX');

            await connection('usuarios').insert({
                id,
                nome,
                idade,
                email,
                foto,
                escolaridade
            });
            return response.status(200).json("Usuario salvo com sucesso");
        } catch (erro) {
            return response.status(400).json("Erro ao salvar usuario");
        }
    }
}
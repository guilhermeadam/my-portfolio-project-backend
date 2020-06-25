const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { name, email, password } = request.body;
        await connection('CAD_USER').insert({
            name,
            email,
            password,
        })

        return response.send('Usuario gravado com sucesso!')
    }
};
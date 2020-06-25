const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const test = await connection('test')
        .select('teste')

        return response.send(test);
    }
}
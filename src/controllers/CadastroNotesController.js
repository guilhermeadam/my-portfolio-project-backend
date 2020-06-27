const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        // const CODINTUSER = request.headers.authorization;
        const { codintuser, subject, description } = request.body;

        await connection('NOTES_USER').insert({
            codintuser,
            subject,
            description
        });

        return response.send('Notes has created!')
    }
}
const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const CODINTUSER = request.headers.authorization;
        const { SUBJECT, DESCRIPTION } = request.body;

        await connection('NOTES_USER').insert({
            CODINTUSER,
            SUBJECT,
            DESCRIPTION
        });

        return response.send('Notes has created!')
    }
}
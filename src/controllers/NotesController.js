const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const CODINTUSER = request.headers.authorization;

    const notes = await connection("NOTES_USER")
      .where({ CODINTUSER: CODINTUSER })
      .select("CODINTUSER","CODINTNOTE", "SUBJECT", "DESCRIPTION", "CREATEDAT");

      response.send(notes);
  },
};

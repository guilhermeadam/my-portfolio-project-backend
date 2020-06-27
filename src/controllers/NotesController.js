const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const codintuser = request.headers.authorization;

    const notes = await connection("NOTES_USER")
      .where({codintuser: codintuser })
      .select(
        "codintuser",
        "codintnote",
        "subject",
        "description",
        "create_at");

      response.send(notes);
      console.log(notes)
  },
};

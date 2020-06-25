const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const { email, password } = request.body;

    const userLogin = await connection("CAD_USER").where({
      email: email,
      password: password,
    })
    .select('codintuser','name')
    .first()

    if(!userLogin) {
        return response.status(400).json({ error: 'Sem cadastro' })
    }

    response.send(userLogin);
  },
};

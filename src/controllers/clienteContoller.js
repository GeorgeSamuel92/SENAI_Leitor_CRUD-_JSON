const Cliente = require("../models/cliente");
const Telefone = require("../models/telefone");
const { insert } = require("../models/clienteMoldel");

const clienteController = {
  adcionaCliente: async (req, res) => {
    try {
      const { nome, dt_nasc, cpf, estado_civil, email, telefone } = req.body;

      const objCliente = new Cliente(null, nome, dt_nasc, cpf, estado_civil, email);

      const objTelefone = [];

      if (endereco.length > 0) {
        endereco.forEach((value) => {
          objEndereco.push(new Endereco(value));
        });
      }
      if (telefone.length > 0) {
        telefone.forEach((value) => {
          objTelefone.push(new Telefone(value));
        });
      }
      
    } catch (error) {
      console.log(error);
      let error_mensagem = verificaErro(error);
      res.render("pages/pag_erro", { messagem: error_mensagem });
    }
  },
};

module.exports = clienteController;
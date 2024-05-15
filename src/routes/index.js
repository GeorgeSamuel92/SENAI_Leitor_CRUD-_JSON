const express = require("express");
const router = express.Router();

const clienteController = require('../controllers/clienteContoller');

router.get("/", clienteController.index);
router.get('/cadastro/novo', clienteController.adicionarCliente);

module.exports = router;
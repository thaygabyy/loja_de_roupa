/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import ClienteController from '../app/controllers/clientes_controller.js'
import CompraController from '../app/controllers/compras_controller.js'
import FornecedorController from '../app/controllers/fornecedors_controller.js'
import FuncionarioController from '#controllers/funcionarios_controller'
import ItemController from '../app/controllers/items_controller.js'
import PedidoController from '#controllers/pedidos_controller'
import ProdutoController from '#controllers/produtos_controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/compra', CompraController).apiOnly()
router.resource('/cliente', ClienteController).apiOnly()
router.resource('/fornecedor', FornecedorController).apiOnly()
router.resource('/funcionario', FuncionarioController).apiOnly()
router.resource('/item', ItemController).apiOnly()
router.resource('/pedido', PedidoController).apiOnly()
router.resource('/produto', ProdutoController).apiOnly()


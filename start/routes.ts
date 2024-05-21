/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import ReceitasController from '../app/controllers/receitas_controller.js'
import CategoriasController from '../app/controllers/categorias_controller.js'
import IngredientesController from '../app/controllers/ingredientes_controller.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/categoria', CategoriasController).apiOnly()
router.resource('/receita', ReceitasController).apiOnly()
router.resource('/ingrediente', IngredientesController).apiOnly()
// import type { HttpContext } from '@adonisjs/core/http'

import type { HttpContext } from '@adonisjs/core/http'
import Produto from '../models/produto.js'
import { ProdutoValidator } from '../validators/produto.js'

export default class ProdutosController {

  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)
    return await Produto.query().paginate(page, perPage)
  }

  async show({ params }: HttpContext) {
    return await Produto.findOrFail(params.id)
  }

  async store({ request, response }: HttpContext) {
    try {
      const dados = await request.validate({ schema: ProdutoValidator })
      const produto = await Produto.create(dados)
      return produto
    } catch (error) {
      return response.status(400).send({ message: error.messages })
    }
  }

  async update({ params, request, response }: HttpContext) {
    try {
      const produto = await Produto.findOrFail(params.id)
      const dados = await request.validate({ schema: ProdutoValidator })
      produto.merge(dados)
      await produto.save()
      return produto
    } catch (error) {
      return response.status(400).send({ message: error.messages })
    }
  }

  async destroy({ params }: HttpContext) {
    const produto = await Produto.findOrFail(params.id)
    await produto.delete()
    return { msg: 'Registro deletado com sucesso', produto }
  }
}


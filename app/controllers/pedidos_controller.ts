// import type { HttpContext } from '@adonisjs/core/http'
import type { HttpContext } from '@adonisjs/core/http'
import Pedido from '../models/pedido.js'
import { PedidoValidator } from '../validators/pedido.js'

export default class PedidosController {

  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)
    return await Pedido.query().paginate(page, perPage)
  }

  async show({ params }: HttpContext) {
    return await Pedido.findOrFail(params.id)
  }

  async store({ request, response }: HttpContext) {
    try {
      const dados = await request.validate({ schema: PedidoValidator })
      const pedido = await Pedido.create(dados)
      return pedido
    } catch (error) {
      return response.status(400).send({ message: error.messages })
    }
  }

  async update({ params, request, response }: HttpContext) {
    try {
      const pedido = await Pedido.findOrFail(params.id)
      const dados = await request.validate({ schema: PedidoValidator })
      pedido.merge(dados)
      await pedido.save()
      return pedido
    } catch (error) {
      return response.status(400).send({ message: error.messages })
    }
  }

  async destroy({ params }: HttpContext) {
    const pedido = await Pedido.findOrFail(params.id)
    await pedido.delete()
    return { msg: 'Registro deletado com sucesso', pedido }
  }
}

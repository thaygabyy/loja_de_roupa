import type { HttpContext } from '@adonisjs/core/http'
import Cliente from '../models/cliente.js'
import { ClienteValidator } from '../validators/cliente.js'

export default class ClientesController {

  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)
    return await Cliente.query().paginate(page, perPage)
  }

  async show({ params }: HttpContext) {
    return await Cliente.findOrFail(params.id)
  }

  async store({ request, response }: HttpContext) {
    try {
      const dados = await request.validate({ schema: ClienteValidator })
      const cliente = await Cliente.create(dados)
      return cliente
    } catch (error) {
      if (error.code === '23505') {
        return response.status(400).send({ message: 'Este email já está em uso.' })
      }
      return response.status(400).send({ message: error.messages })
    }
  }

  async update({ params, request, response }: HttpContext) {
    try {
      const cliente = await Cliente.findOrFail(params.id)
      const dados = await request.validate({ schema: ClienteValidator })
      cliente.merge(dados)
      await cliente.save()
      return cliente
    } catch (error) {
      return response.status(400).send({ message: error.messages })
    }
  }

  async destroy({ params }: HttpContext) {
    const cliente = await Cliente.findOrFail(params.id)
    await cliente.delete()
    return { msg: 'Registro deletado com sucesso', cliente }
  }
}

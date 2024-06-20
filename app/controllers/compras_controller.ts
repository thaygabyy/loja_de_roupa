// import type { HttpContext } from '@adonisjs/core/http'

import type { HttpContext } from '@adonisjs/core/http'
import Compra from '../models/compra.js'
import { CompraValidator } from '../validators/compra.js'

export default class ComprasController {

  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)
    return await Compra.query().paginate(page, perPage)
  }

  async show({ params }: HttpContext) {
    return await Compra.findOrFail(params.id)
  }

  async store({ request, response }: HttpContext) {
    try {
      const dados = await request.validate({ schema: CompraValidator })
      const compra = await Compra.create(dados)
      return compra
    } catch (error) {
      return response.status(400).send({ message: error.message })
    }
  }

  async update({ params, request, response }: HttpContext) {
    try {
      const compra = await Compra.findOrFail(params.id)
      const dados = await request.validate({ schema: CompraValidator })
      compra.merge(dados)
      await compra.save()
      return compra
    } catch (error) {
      return response.status(400).send({ message: error.message })
    }
  }

  async destroy({ params }: HttpContext) {
    const compra = await Compra.findOrFail(params.id)
    await compra.delete()
    return { msg: 'Registro deletado com sucesso', compra }
  }
}


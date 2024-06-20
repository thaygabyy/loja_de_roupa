// import type { HttpContext } from '@adonisjs/core/http'

import type { HttpContext } from '@adonisjs/core/http'
import Fornecedor from '../models/fornecedor.js'
import { FornecedorValidator } from '../validators//fornecedor.js'

export default class FornecedorsController {

  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)
    return await Fornecedor.query().paginate(page, perPage)
  }

  async show({ params }: HttpContext) {
    return await Fornecedor.findOrFail(params.id)
  }

  async store({ request, response }: HttpContext) {
    try {
      const dados = await request.validate({ schema: FornecedorValidator })
      const fornecedor = await Fornecedor.create(dados)
      return fornecedor
    } catch (error) {
      return response.status(400).send({ message: error.messages })
    }
  }

  async update({ params, request, response }: HttpContext) {
    try {
      const fornecedor = await Fornecedor.findOrFail(params.id)
      const dados = await request.validate({ schema: FornecedorValidator })
      fornecedor.merge(dados)
      await fornecedor.save()
      return fornecedor
    } catch (error) {
      return response.status(400).send({ message: error.messages })
    }
  }

  async destroy({ params }: HttpContext) {
    const fornecedor = await Fornecedor.findOrFail(params.id)
    await fornecedor.delete()
    return { msg: 'Registro deletado com sucesso', fornecedor }
  }
}


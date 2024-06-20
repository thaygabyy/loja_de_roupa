// import type { HttpContext } from '@adonisjs/core/http'
import type { HttpContext } from '@adonisjs/core/http'
import Funcionario from '../models/funcionario.js'
import { FuncionarioValidator } from '../validators/funcionario.js'

export default class FuncionariosController {

  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)
    return await Funcionario.query().paginate(page, perPage)
  }

  async show({ params }: HttpContext) {
    return await Funcionario.findOrFail(params.id)
  }

  async store({ request, response }: HttpContext) {
    try {
      const dados = await request.validate({ schema: FuncionarioValidator })
      const funcionario = await Funcionario.create(dados)
      return funcionario
    } catch (error) {
      return response.status(400).send({ message: error.messages })
    }
  }

  async update({ params, request, response }: HttpContext) {
    try {
      const funcionario = await Funcionario.findOrFail(params.id)
      const dados = await request.validate({ schema: FuncionarioValidator })
      funcionario.merge(dados)
      await funcionario.save()
      return funcionario
    } catch (error) {
      return response.status(400).send({ message: error.messages })
    }
  }

  async destroy({ params }: HttpContext) {
    const funcionario = await Funcionario.findOrFail(params.id)
    await funcionario.delete()
    return { msg: 'Registro deletado com sucesso', funcionario }
  }
}


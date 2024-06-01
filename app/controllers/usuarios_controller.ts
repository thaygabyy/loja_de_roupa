import type { HttpContext } from '@adonisjs/core/http'
import Usuario from '../models/usuario.js'
import { UsuarioValidator } from '#validators/usuario'

export default class UsuariosController {

  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)
    return await Usuario.query().paginate(page, perPage)
  }

  async show({ params }: HttpContext) {
    return await Usuario.findOrFail(params.id)
  }

  async store({ request, response }: HttpContext) {
    try {
      const dados = await request.validate({ schema: UsuarioValidator })
      const usuario = await Usuario.create(dados)
      return usuario
    } catch (error) {
      if (error.code === '23505') { 
        return response.status(400).send({ message: 'Este email já está em uso.' })
      }
      return response.status(400).send({ message: error.messages })
    }
  }

  async update({ params, request, response }: HttpContext) {
    try {
      const usuario = await Usuario.findOrFail(params.id)
      const dados = await request.validate({ schema: UsuarioValidator })
      usuario.merge(dados)
      await usuario.save()
      return usuario
    } catch (error) {
      return response.status(400).send({ message: error.messages })
    }
  }

  async destroy({ params }: HttpContext) {
    const usuario = await Usuario.findOrFail(params.id)
    await usuario.delete()
    return { msg: 'Registro deletado com sucesso', usuario }
  }
}
import type { HttpContext } from '@adonisjs/core/http'

import Usuario from "../models/usuario.js"

export default class UsuariosController {
    async index({ request }: HttpContext) {

        //http://localhost:3333/usuarios?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Usuario.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {

        // return await Produto.findOrFail(params.id)
        return await Usuario.query().where('id', params.id).preload('nome').preload('email').preload('senha').first()
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'email', 'senha',])


        return await Usuario.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const usuario = await Usuario.findOrFail(params.id)
        const dados = request.only(['nome', 'email', 'senha',])

        usuario.merge(dados)
        return await usuario.save()

    }

    async destroy({ params }: HttpContext) {
        const usuario = await Usuario.findOrFail(params.id)

        await usuario.delete()
        return { msg: 'registro deletado com sucesso', Usuario }

        // try {
        //     return {msg: 'registro deletado com sucesso',usuario}
        // } catch (error) {
        //     return {msg :error}
        // }
    }
}
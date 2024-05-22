 import type { HttpContext } from '@adonisjs/core/http'

import Usuario from "../models/usuario"

export default class UsuariosController {
    async index({request}: HttpContext) {

        //http://localhost:3333/produtos?page=1&perPage=5
    
        const page = request.input('page',1 )
        const perPage = request.input('perPage',10 )

        return await Usuario.query().preload('tipo').preload('ingredientes').paginate(page, perPage)
    }

    async show({ params }: HttpContext) {

       // return await Produto.findOrFail(params.id)
        return await Usuario.query().where('id',params.id).preload('tipo').preload('ingredientes').first()
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'preco', 'tamanho', 'tipoId'])


        return await Usuario.create(dados)
    }

    async update({ params,request }: HttpContext) {
        const Usuarios = await  Usuario.findOrFail(params.id)
        const dados = request.only(['nome', 'email', 'senha',])

        Usuarios.merge(dados) 
        return await Usuarios.save()

    }

    async destroy({ params }: HttpContext) {
        const Usuario = await  Usuario.findOrFail(params.id)

        await Usuario.delete()
        return {msg: 'registro deletado com sucesso',Usuario}

        // try {
        //     return {msg: 'registro deletado com sucesso',produto}
        // } catch (error) {
        //     return {msg :error}
        // }
    }
}
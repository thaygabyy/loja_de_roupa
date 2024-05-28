import type { HttpContext } from '@adonisjs/core/http'

import Usuario from '../models/usuario.js'

export default class UsuariosController  {

    async index({request}: HttpContext){

        // http://localhost:3333/receitas?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Usuario.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await Usuario.findOrFail(params.id)
    }

    async store({request}: HttpContext){
        const dados = request.only(['nome', 'email', 'senha'])
        return await Usuario.create(dados)
    }

    async update({params, request}: HttpContext){

        const receita = await Usuario.findOrFail(params.id)
        const dados = request.only(['nome', 'email', 'senha'])

        receita.merge(dados)
        return await receita.save()
    }

    async destroy({params}: HttpContext){
        const receita = await Usuario.findOrFail(params.id)
        
        await receita.delete()
        return {msg: 'Registro deletado com sucesso', receita}
    }
}
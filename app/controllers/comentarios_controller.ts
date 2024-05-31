import type { HttpContext } from '@adonisjs/core/http'

import Comentario from '../models/ingrediente.js'

export default class IngredientesController {
    async index({request}: HttpContext){

        // http://localhost:3333/ingredientes?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Comentario.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await Comentario.findOrFail(params.id)
    }

    async store({request}: HttpContext){
        const dados = request.only(['nome', 'data_comentario', 'usuario_id', 'id_receita'])
        return await Comentario.create(dados)
    }

    async update({params, request}: HttpContext){

        const ingrediente = await Comentario.findOrFail(params.id)
        const dados = request.only(['nome','data_comentario', 'usuario_id', 'id_receita'])

        comentario.merge(dados)
        return await comentario.save()
    }

    async destroy({params}: HttpContext){
        const comentario = await comentario.findOrFail(params.id)
        
        await comentario.delete()
        return {msg: 'Registro deletado com sucesso', comentario}
    }
}
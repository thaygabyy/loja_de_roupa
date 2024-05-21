import type { HttpContext } from '@adonisjs/core/http'

import Ingrediente from '../models/ingrediente.js'

export default class IngredientesController {
    async index({request}: HttpContext){

        // http://localhost:3333/ingredientes?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Ingrediente.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await Ingrediente.findOrFail(params.id)
    }

    async store({request}: HttpContext){
        const dados = request.only(['nome', 'preco', 'tipo'])
        return await Ingrediente.create(dados)
    }

    async update({params, request}: HttpContext){

        const ingrediente = await Ingrediente.findOrFail(params.id)
        const dados = request.only(['nome', 'preco', 'tipo'])

        ingrediente.merge(dados)
        return await ingrediente.save()
    }

    async destroy({params}: HttpContext){
        const ingrediente = await Ingrediente.findOrFail(params.id)
        
        await ingrediente.delete()
        return {msg: 'Registro deletado com sucesso', ingrediente}
    }
}
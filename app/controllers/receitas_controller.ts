import type { HttpContext } from '@adonisjs/core/http'

import Receita from '../models/receita.js'

export default class ReceitasController {

    async index({request}: HttpContext){

        // http://localhost:3333/receitas?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Receita.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await Receita.findOrFail(params.id)
    }

    async store({request}: HttpContext){
        const dados = request.only(['nome', 'instrucoes', 'tempo_de_preparo', 'num_porcoes', 'categoria_id'])
        return await Receita.create(dados)
    }

    async update({params, request}: HttpContext){

        const receita = await Receita.findOrFail(params.id)
        const dados = request.only(['nome', 'instrucoes', 'tempo_de_preparo', 'num_porcoes', 'categoria_id'])

        receita.merge(dados)
        return await receita.save()
    }

    async destroy({params}: HttpContext){
        const receita = await Receita.findOrFail(params.id)
        
        await receita.delete()
        return {msg: 'Registro deletado com sucesso', receita}
    }
}
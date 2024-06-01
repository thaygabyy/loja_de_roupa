import type { HttpContext } from '@adonisjs/core/http'

import ReceitaIngrediente from '#models/receita_ingrediente'
import { ReceitaIngredienteValidator } from '#validators/receita_ingrediente'

export default class ReceitaIngredientesController {
    async index({request}: HttpContext){
        // http://localhost:3333/receitaingredientes?page=1&perPage=5
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await ReceitaIngrediente.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await ReceitaIngrediente.findOrFail(params.id)
    }

    async store({request}: HttpContext){
        const dados = await request.validate({ schema: ReceitaIngredienteValidator })
        return await ReceitaIngrediente.create(dados)
    }

    async update({params, request}: HttpContext){
        const receitaingrediente = await ReceitaIngrediente.findOrFail(params.id)
        const dados =await request.validate({ schema: ReceitaIngredienteValidator })

        receitaingrediente.merge(dados)
        return await receitaingrediente.save()
    }

    async destroy({params}: HttpContext){
        const receitaingrediente = await ReceitaIngrediente.findOrFail(params.id)
        
        await receitaingrediente.delete()
        return {msg: 'Registro deletado com sucesso', receitaingrediente}
    }
}
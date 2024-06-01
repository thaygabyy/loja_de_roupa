import type { HttpContext } from '@adonisjs/core/http'

import Avaliacao from '../models/avaliacao.js'
import { AvaliacaoValidator } from '#validators/avaliacao'

export default class AvaliacaosController {

    async index({request}: HttpContext){

        // http://localhost:3333/Avaliacaos?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Avaliacao.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await Avaliacao.findOrFail(params.id)
    }

    async store({request}: HttpContext){
        const dados = await request.validate({ schema: AvaliacaoValidator })
        return await Avaliacao.create(dados)
    }

    async update({params, request}: HttpContext){

        const avaliacao = await Avaliacao.findOrFail(params.id)
        const dados = await request.validate({ schema: AvaliacaoValidator })

        avaliacao.merge(dados)
        return await avaliacao.save()
    }

    async destroy({params}: HttpContext){
        const avaliacao = await Avaliacao.findOrFail(params.id)
        
        await avaliacao.delete()
        return {msg: 'Registro deletado com sucesso .', Avaliacao}
    }
}
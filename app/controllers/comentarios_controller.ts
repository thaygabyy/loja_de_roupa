import type { HttpContext } from '@adonisjs/core/http'

import Comentario from '#models/comentario'
import { ComentarioValidator } from '#validators/comentario'

export default class ComentariosController {
    async index({request}: HttpContext){
        //http://localhost:3333/comentario?page=1&perPage=5
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Comentario.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await Comentario.findOrFail(params.id)
    }

    async store({request}: HttpContext){
        const dados = await request.validate({ schema: ComentarioValidator })
        return await Comentario.create(dados)
    }

    async update({params, request}: HttpContext){

        const comentario = await Comentario.findOrFail(params.id)
        const dados = await request.validate({ schema: ComentarioValidator })

        comentario.merge(dados)
        return await comentario.save()
    }

    async destroy({params}: HttpContext){
        const comentario = await Comentario.findOrFail(params.id)
        
        await comentario.delete()
        return {msg: 'Registro deletado com sucesso', comentario}
    }
}
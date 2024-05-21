import type { HttpContext } from '@adonisjs/core/http'

import Categoria from '../models/categoria.js'

export default class CategoriasController {

    async index({request}: HttpContext){

        // http://localhost:3333/Categorias?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Categoria.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await Categoria.findOrFail(params.id)
    }

    async store({request}: HttpContext){
        const dados = request.only(['nome'])
        return await Categoria.create(dados)
    }

    async update({params, request}: HttpContext){

        const categoria = await Categoria.findOrFail(params.id)
        const dados = request.only(['nome'])

        categoria.merge(dados)
        return await categoria.save()
    }

    async destroy({params}: HttpContext){
        const categoria = await Categoria.findOrFail(params.id)
        
        await categoria.delete()
        return {msg: 'Registro deletado com sucesso', categoria}
    }
}
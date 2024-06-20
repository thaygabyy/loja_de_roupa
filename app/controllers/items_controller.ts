// import type { HttpContext } from '@adonisjs/core/http'

import type { HttpContext } from '@adonisjs/core/http'
import Item from '../models/item.js'
import { ItemValidator } from '../validators/item.js'

export default class ItemsController {

  public async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 10)
    return await Item.query().paginate(page, perPage)
  }

  public async show({ params }: HttpContext) {
    return await Item.findOrFail(params.id)
  }

  public async store({ request, response }: HttpContext) {
    try {
      const data = await request.validate({ schema: ItemValidator })
      const item = await Item.create(data)
      return item
    } catch (error) {
      return response.status(400).send({ message: error.messages })
    }
  }

  public async update({ params, request, response }: HttpContext) {
    try {
      const item = await Item.findOrFail(params.id)
      const data = await request.validate({ schema: ItemValidator })
      item.merge(data)
      await item.save()
      return item
    } catch (error) {
      return response.status(400).send({ message: error.messages })
    }
  }

  public async destroy({ params }: HttpContext) {
    const item = await Item.findOrFail(params.id)
    await item.delete()
    return { message: 'Registro deletado com sucesso', item }
  }
}


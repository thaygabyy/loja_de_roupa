import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ItemDoPedido extends BaseModel {
  @column({ isPrimary: true })
  declare idItemDoPedido: number

  @column()
  declare idPedido: number

  @column()
  declare idProduto: number

  @column()
  declare quantidade: number

  @column()
  declare precoUnitario: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

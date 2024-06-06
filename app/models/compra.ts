import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Compra extends BaseModel {
  @column({ isPrimary: true })
  declare idCompra: number

  @column()
  declare dataDaCompra: string

  @column()
  declare idFornecedor: number

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

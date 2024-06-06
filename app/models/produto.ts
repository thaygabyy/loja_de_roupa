import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  declare idProduto: number

  @column()
  declare nomeProduto: string

  @column()
  declare tamanho: string

  @column()
  declare cor: string

  @column()
  declare preco: number

  @column()
  declare quantidadeEmEstoque: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

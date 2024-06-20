import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type {HasMany} from '@adonisjs/lucid/types/relations'
import Item from '../models/item.js'
import Compra from '../models/compra.js'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  declare id_produto: number

  @column()
  declare nome_produto: string

  @column()
  declare tamanho: string

  @column()
  declare cor: string

  @column()
  declare preco: number

  @column()
  declare quantidade_em_estoque: number
  @hasMany(() => Item, {
    foreignKey: 'id_produto',
  })
  declare items: HasMany<typeof Item>

  @hasMany(() => Compra, {
    foreignKey: 'id_produto',
  })
  declare compras: HasMany<typeof Compra>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type {HasMany} from '@adonisjs/lucid/types/relations'
import Compra from '../models/compra.js'

export default class Fornecedor extends BaseModel {
  @column({ isPrimary: true })
  declare id_fornecedor: number

  @column()
  declare nome: string

  @column()
  declare endereco: string

  @column()
  declare telefone: number

  @column()
  declare email: string

  @hasMany(() => Compra, {
    foreignKey: 'id_fornecedor',
  })
  declare compras: HasMany<typeof Compra>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

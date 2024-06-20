import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type {HasMany} from '@adonisjs/lucid/types/relations'
import Pedido from '../models/pedido.js'

export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  declare id_funcionario: number

  @column()
  declare nome: string

  @column()
  declare cargo: string

  @column()
  declare telefone: number

  @column()
  declare email: string

  @hasMany(() => Pedido, {
    foreignKey: 'id_funcionario',
  })
  declare pedidos: HasMany<typeof Pedido>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

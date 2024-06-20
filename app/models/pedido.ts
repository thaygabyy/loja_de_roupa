import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type {HasMany,BelongsTo } from '@adonisjs/lucid/types/relations'
import Cliente from '../models/cliente.js'
import Funcionario from '../models/funcionario.js'
import Item from '../models/item.js'

export default class Pedido extends BaseModel {
  @column({ isPrimary: true })
  declare id_pedido: number

  @column()
  declare data_do_pedido: string

  @column()
  declare id_cliente: number

  @column()
  declare id_funcionario: number

  @belongsTo(() => Cliente, {
    foreignKey: 'id_cliente',
  })
  declare clientes: BelongsTo<typeof Cliente>

  @belongsTo(() => Funcionario, {
    foreignKey: 'id_funcionario',
  })
  declare funcionarios: BelongsTo<typeof Funcionario>

  @hasMany(() => Item, {
    foreignKey: 'id_pedido',
  })
  declare items: HasMany<typeof Item>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

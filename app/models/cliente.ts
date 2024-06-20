import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type {HasMany} from '@adonisjs/lucid/types/relations'
import Pedido from '../models/pedido.js'

export default class  Cliente extends BaseModel {
  @column({ isPrimary: true })
  declare id_cliente: number

  @column()
  declare nome: string
  
  @column()
  declare endereco: string

  @column()
  declare telefone: number

  @column()
  declare email: string

  @hasMany(() => Pedido, {
    foreignKey: 'id_cliente',
  })
  declare pedidos: HasMany<typeof Pedido>

  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
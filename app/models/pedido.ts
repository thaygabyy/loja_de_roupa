import { DateTime } from 'luxon'
import { BaseModel, belongsTo , column, manyToMany , hasMany} from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany, HasMany} from '@adonisjs/lucid/types/relations'
import Cliente from './cliente.js'

export default class Pedido extends BaseModel {
  @column({ isPrimary: true })
  declare idPedido: number

  @column()
  declare dataDoPedido: string

  @column()
  declare idCliente: number

  @column()
  declare idFuncionario: number

  @belongsTo(()=>Cliente)
  declare tipo: BelongsTo<typeof Cliente>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

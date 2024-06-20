import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo} from '@adonisjs/lucid/orm'
import type {BelongsTo} from '@adonisjs/lucid/types/relations'
import Pedido from '../models/pedido.js'
import Produto from '../models/produto.js'

export default class Item extends BaseModel {
  @column({ isPrimary: true })
  declare id_item: number

  @column()
  declare id_pedido: number

  @column()
  declare id_produto: number

  @column()
  declare quantidade: number

  @column()
  declare preco_unitario: number

  @belongsTo(() => Pedido, {
    foreignKey: 'id_pedido',
  })
  declare pedidos: BelongsTo<typeof Pedido>

  @belongsTo(() => Produto, {
    foreignKey: 'id_produto',
  })
  declare produtos: BelongsTo<typeof Produto>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

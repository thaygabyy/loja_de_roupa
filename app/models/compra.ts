import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type {BelongsTo} from '@adonisjs/lucid/types/relations'
import Fornecedor from '../models/fornecedor.js'
import Produto from '../models/produto.js'

export default class Compra extends BaseModel {
  @column({ isPrimary: true })
  declare id_compra: number

  @column()
  declare data_da_compra: string

  @column()
  declare id_fornecedor: number

  @column()
  declare id_produto: number

  @column()
  declare quantidade: number

  @column()
  declare preco_unitario: number

  @belongsTo(() => Fornecedor, {
    foreignKey: 'id_fornecedor',
  })
  declare fornecedor: BelongsTo<typeof Fornecedor>

  @belongsTo(() => Produto, {
    foreignKey: 'id_produto',
  })
  declare produto: BelongsTo<typeof Produto>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

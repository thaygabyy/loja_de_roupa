import { DateTime } from 'luxon'
import { BaseModel, belongsTo , column, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany} from '@adonisjs/lucid/types/relations'
import categoria from './categoria.js'
import Ingrediente from './ingrediente.js'

export default class Receita extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare instrucoes: string

  @column()
  declare tempo_de_preparo: number
  
  @column()
  declare num_porcoes: number

  @column()
  declare categoria_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>categoria)
  declare tipo: BelongsTo<typeof categoria>

  @manyToMany(()=>Ingrediente, {
    pivotTable: 'receita_ingredientes'
  })
  declare ingredientes: ManyToMany<typeof Ingrediente>
}
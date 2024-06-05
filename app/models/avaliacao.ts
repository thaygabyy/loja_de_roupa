import { DateTime } from 'luxon'
import { BaseModel, belongsTo , column } from '@adonisjs/lucid/orm'
import type { BelongsTo} from '@adonisjs/lucid/types/relations'
import Receita from './receita.js'
import Usuario from './usuario.js'

export default class Avaliacao extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare pontuacao: number

  @column()
  declare comentario: string

  @column()
  declare data_avaliacao: string

  @column()
  declare usuario_id: number

  @column()
  declare receita_id: number

  @belongsTo(()=>Receita)
  declare receita: BelongsTo<typeof Receita>

  @belongsTo(()=>Usuario)
  declare usuario: BelongsTo<typeof Usuario>


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
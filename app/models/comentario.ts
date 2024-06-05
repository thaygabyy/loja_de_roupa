import { DateTime } from 'luxon'
import { BaseModel, belongsTo , column } from '@adonisjs/lucid/orm'
import type { BelongsTo} from '@adonisjs/lucid/types/relations'
import Usuario from './usuario.js'
import Receita from './receita.js'


export default class Comentario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare texto: string
  
  @column()
  declare data_comentario: string

  @column()
  declare usuario_id: number

  @column()
  declare receita_id: number

  @belongsTo(()=>Usuario)
  declare usuario: BelongsTo<typeof Usuario>


  @belongsTo(()=>Receita)
  declare receita: BelongsTo<typeof Receita>


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
  
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
 
}
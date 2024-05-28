import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Usuario extends BaseModel {
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

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
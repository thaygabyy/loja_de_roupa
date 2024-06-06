import { DateTime } from 'luxon'
import { BaseModel,  column} from '@adonisjs/lucid/orm'

export default class  Cliente extends BaseModel {
  @column({ isPrimary: true })
  declare idCliente: number

  @column()
  declare nome: string
  
  @column()
  declare endereco: string

  @column()
  declare telefone: number

  @column()
  declare email: string

  

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
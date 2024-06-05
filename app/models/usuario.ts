import { DateTime } from 'luxon'
import { BaseModel,  column, manyToMany, hasMany } from '@adonisjs/lucid/orm'
import type { ManyToMany, HasMany} from '@adonisjs/lucid/types/relations'
import ReceitaIngrediente from './receita_ingrediente.js'
import Avaliacao from './avaliacao.js'
import Comentario from './comentario.js'

export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare email: string

  @column()
  declare senha: string

  @manyToMany(()=>ReceitaIngrediente, {
    pivotTable: 'receita_ingrediente'
  })
  declare receita_ingrediente: ManyToMany<typeof ReceitaIngrediente>

  @hasMany(()=>Avaliacao)
  declare avaliacao: HasMany<typeof Avaliacao>

  @hasMany(()=>Comentario)
  declare comentario: HasMany<typeof Comentario>


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comentarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('texto', 1000).notNullable()
      table.string('data_comentario',8).notNullable()
     
      table.integer('receita_id').unsigned().references('id').inTable('receitas').notNullable()
      table.integer('usuario_id').unsigned().references('id').inTable('usuarios').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
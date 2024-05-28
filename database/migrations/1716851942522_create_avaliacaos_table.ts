import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'avaliacaos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('pontuacao').notNullable()
      table.string('comentario',100).notNullable()
      table.string('data_avaliacao',8).notNullable()

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
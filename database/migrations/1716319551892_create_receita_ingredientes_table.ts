import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'receita_ingredientes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome').notNullable()
      table.integer('quantidade').notNullable()
      table.integer('unidade_medida').notNullable()

      table.integer('receita_id').unsigned().references('id').inTable('receitas').notNullable()
      table.integer('ingrediente_id').unsigned().references('id').inTable('ingredientes').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
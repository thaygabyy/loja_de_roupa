import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'produtos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_produto').notNullable().unique()
      table.string('nome_produto').notNullable()
      table.string('tamanho').nullable()
      table.string('cor').nullable()
      table.decimal('preco', 12, 2).notNullable()
      table.integer('quantidade_em_estoque').notNullable()

      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
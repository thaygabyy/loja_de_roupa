import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'compras'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_compra').notNullable().unique()
      table.string('data_da_compra').notNullable()
      table.integer('id_fornecedor').unsigned().references('id_fornecedor').inTable('fornecedores').onDelete('CASCADE').notNullable()
      table.integer('id_produto').unsigned().references('id_produto').inTable('produtos').onDelete('CASCADE').notNullable()
      table.integer('quantidade').notNullable()
      table.decimal('preco_unitario', 12, 2).notNullable()

      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
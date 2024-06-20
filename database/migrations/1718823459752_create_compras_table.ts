import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Compras extends BaseSchema {
  protected tableName = 'compras'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_compra').primary()
      table.string('data_da_compra', 8).notNullable()
      table.integer('id_fornecedor').unsigned().references('id_fornecedor').inTable('fornecedors').onDelete('CASCADE')
      table.integer('id_produto').unsigned().references('id_produto').inTable('produtos').onDelete('CASCADE')
      table.integer('quantidade').notNullable()
      table.decimal('preco_unitario', 10, 2).notNullable()
      table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

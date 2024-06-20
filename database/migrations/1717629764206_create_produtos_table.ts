import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Produtos extends BaseSchema {
  protected tableName = 'produtos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_produto').primary()
      table.string('nome_produto').notNullable()
      table.string('tamanho').notNullable()
      table.string('cor').notNullable()
      table.decimal('preco', 10, 2).notNullable()
      table.integer('quantidade_em_estoque').notNullable()
      table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

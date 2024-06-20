import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Fornecedors extends BaseSchema {
  protected tableName = 'fornecedors'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_fornecedor').primary()
      table.string('nome').notNullable()
      table.string('endereco').notNullable()
      table.integer('telefone').notNullable()
      table.string('email').notNullable()
      table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'pedidos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_pedido').notNullable().unique()
      table.timestamp('data_do_pedido', { useTz: true }).notNullable()
      table.integer('id_cliente').unsigned().references('id_cliente').inTable('clientes').onDelete('CASCADE').notNullable()
      table.integer('id_funcionario').unsigned().references('id_funcionario').inTable('funcionarios').onDelete('CASCADE').notNullable()

      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
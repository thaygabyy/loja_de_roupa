import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Pedido from '../../app/models/pedido.js'

export default class extends BaseSeeder {
  async run() {
    await Pedido.createMany([
      {
        data_do_pedido: '2024-01-01',
        id_cliente: 1, 
        id_funcionario: 1 
        },
      { 
        data_do_pedido: '2024-02-01',
        id_cliente: 2,
        id_funcionario: 2 
      },
      { data_do_pedido: '2024-03-01',
        id_cliente: 3,
        id_funcionario: 3 
      },
    ])
  }
}